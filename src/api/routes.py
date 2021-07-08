"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
import sendgrid
from sendgrid.helpers.mail import *
from flask import Flask, request, jsonify, url_for, Blueprint,current_app
from api.models import db, User, Pregunta
from api.utils import generate_sitemap, APIException
from flask_mail import Message
from flask_jwt_extended import create_access_token, JWTManager, jwt_required, get_jwt_identity

api = Blueprint('api', __name__)


#registrar usuario
@api.route('/usuario', methods=['POST'])
def create_User():
    data = request.get_json()
    if not data:
        return jsonify({"msg":"error"}),400 

    for i in data:

        user = User(name=i["name"], password=i["password"], birthday=i["birthday"], gender=i["gender"],
                    email=i["email"], cant_question=i["cant_question"], nota_alta=i["nota_alta"])
        db.session.add(user)
        db.session.commit()
    return jsonify({"user": "ok"}), 200

#login de usuario

@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    if email is None:
        return jsonify({"message": "Bad user or password"}), 400
    if password is None:
        return jsonify({"message": "Bad user or password"}), 400
    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        return jsonify({"message": "Bad user or password"}), 401
    else:
        access_token = create_access_token(identity=user.id)
        return jsonify({"token": access_token}), 200


@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    return jsonify({"id": user.id, "email": user.email})


#get info de usuario

@api.route('/usuario', methods=['GET'])
@jwt_required()
def consulta_User():
    current_user_id = get_jwt_identity()
    user = User.query.filter_by(id=current_user_id).first()
    request = user.serialize()
    return jsonify(request), 200

#carga de preguntas a bd

@api.route('/pregunta', methods=['POST'])
def addPregunta():
    data = request.get_json()
    for i in data:
        preg = Pregunta(test_log=i["test_log"],frase=i["frase"],option_correcta=i["option_correcta"],option_mal1=i["option_mal1"],option_mal2=i["option_mal2"],option_mal3=i["option_mal3"])
        db.session.add(preg)
        db.session.commit()

    return jsonify({"data": "ok"}), 200

#get de preguntas 

@api.route('/pregunta', methods=['GET'])
def infoPregunta():
    preg = Pregunta.query.all()
    request = list(map(lambda preg:preg.serialize(),preg)) 
    return jsonify(request), 200

#update nota 
@api.route('/usuario', methods=['PUT'])
@jwt_required()
def change_user_data():
# buscamos el registro  a actualizar
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
# obtenemos los datos parametros de entrada
    upd_cant_question = request.json["cant_question"]
    upd_nota_alta = request.json["nota_alta"]
    if not (upd_cant_question):
        return jsonify({"error": "Invalid"}), 400
# actualizamos  los nuevos datos
    user.cant_question = upd_cant_question
    user.nota_alta = upd_nota_alta
    db.session.commit()
    return jsonify({"msg": "Informacion actualizada"}), 200

# Eliminar usuario

@api.route('/usuario', methods=["DELETE"])
@jwt_required()
def delete_usuario():
    current_user_id = get_jwt_identity()
    user = User.query.filter_by(id=current_user_id).first()
    if user is None:
        raise APIException("usuario no existe!",status_code=404)
    db.session.delete(user)
    db.session.commit()
    return jsonify({"Usuario eliminado":"ok"}),200

#RECUPERAR CONTRASEÑA
@api.route("/forgot_pass", methods=["POST"])
def forgot_pass():
    email=request.json.get("email", None)

    print(email)
    if not email:
        return jsonify({"message": "Email no registrado"}), 400

    email_registrado = User.query.filter_by(email=email).first()
    
    sg = sendgrid.SendGridAPIClient(api_key=os.environ.get('SENDGRID_API_KEY'))
    from_email = Email("cris-nando01@hotmail.com")
    to_email = To(email)
    subject = "Su contraseña para ingresar a Fitmind es: "
    content = Content("text/plain", "Tu contraseña es: " + email_registrado.password)
    mail = Mail(from_email, to_email, subject, content)
    try:
        response = sg.client.mail.send.post(request_body=mail.get())
        print(response.status_code)
        print(response.body)
        print(response.headers)
    except:
        return jsonify({"msg": "failed"}), 400
