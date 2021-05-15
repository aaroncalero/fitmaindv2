"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
import sendgrid
from sendgrid.helpers.mail import *
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Calificaciones, Question
from api.utils import generate_sitemap, APIException
from flask_mail import Message
from flask_jwt_extended import create_access_token, JWTManager, jwt_required, get_jwt_identity

api = Blueprint('api', __name__)
#USUARIO
@api.route('/createUser', methods=['POST'])
def create_User():
    data = request.get_json()
    for i in data:
        user=User(name=i["name"], password=i["password"], birthday=i["birthday"], gender=i["gender"], email=i["email"])
        db.session.add(user)
        db.session.commit()
    return jsonify({"user":"ok"}),200 

@api.route('/consultaUser', methods=['GET'])
def consulta_User():
    id=request.json.get("id",None)
    consulta= User.query.get(id)
    
    return jsonify({"msg":consulta.serialize()}),200
#CALIFICACION
@api.route("/createCalificacion", methods=['POST'])
def create_Calificacion():
    data = request.get_json()
    for i in data:
        calific=Calificaciones(calificacion=i["calificacion"])
        db.session.add(calific)
        db.session.commit()

    return jsonify({"calific":"ok"}),200
   

@api.route('/consultaCalificacion', methods=['GET'])
def consulta_Calificacion():
    id=request.json.get("id",None)
    consulta= Calificaciones.query.get(id)
    
    return jsonify({"msg":consulta.serialize()}),200
	
	
	
#LOGIN
@api.route("/login", methods=["POST"])
def login():
    email=request.json.get("email", None)
    password=request.json.get("password", None)

    if email is None:
        return jsonify ({"message": "Bad user or password"}),400
    if password is None:
        return jsonify ({"message": "Bad user or password"}),400
    user=User.query.filter_by(email=email, password=password).first()
    if user is None:
        return jsonify ({"message": "Bad user or password"}),401
    else:
        access_token = create_access_token(identity=user.id)
        return jsonify({"token": access_token, "id":user.id}),200

@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    current_user_id=get_jwt_identity()
    user=User.query.get(current_user_id)
    return jsonify({"id":user.id, "email":user.email})
    
#QUESTION
@api.route("/question", methods=["GET"])
def Question():
    test_pri=Question.query.all()
    test_pri = list(map(lambda x: x.serialize(), test_pri))
    return jsonify({"results":test_pri})

@api.route("/question", methods=["POST"])
def Question_agregar():
    data = request.get_json()
    for i in data:
        question=Question(frase=i["frase"], option_correcta=i["option_correcta"], option_mal1=i["option_mal1"], option_mal2=i["option_mal2"], option_mal3=i["option_mal3"], test_log=i["test_log"])
        db.session.add(question)
        db.session.commit()
    
    return jsonify({"results":"ok"}),200


#RECUPERAR CONTRASEÑA
@api.route("/forgot_pass", methods=["POST"])
def forgot_pass():
    from app import mail
    #paso1 recibir email y respuesta secreta
    #paso2 corroborar si la respuesta secreta es correcta y el mail (CONSULTAR A BASE DE DATOS)
    #paso3 si mail y respuesta calzan enviar mail con
    email=request.json.get("email", None)
    email_registrado = User.query.filter_by(email=email).first()
    if email_registrado is None:
        return jsonify({"message": "Email no registrado"}), 400
    msg= Message('Recuperacion de contraseña', recipients=[email])
    msg.html = ('<strong>Su contraseña actual es </strong>'+ email_registrado.password)
    mail.send(msg)
    return jsonify({"message": "Su contraseña fue enviada a su correo"}), 200



# """
# This module takes care of starting the API Server, Loading the DB and Adding the endpoints
# """
# import os
# from flask import Flask, request, jsonify, url_for, Blueprint
# from api.models import db, User
# from api.utils import generate_sitemap, APIException
# from flask_jwt_extended import create_access_token, JWTManager, jwt_required, get_jwt_identity

# api = Blueprint('api', __name__)

# @api.route('/hello', methods=['POST', 'GET'])
# def handle_hello():

#     response_body = {
#         "message": "Hello! I'm a message that came from the backend"
#     }

#     return jsonify(response_body), 200

# #INICIO DE PROYECTO
# @api.route("/login", methods=["POST"])
# def login():
#     email=request.json.get("email", None)
#     password=request.json.get("password", None)

#     if email is None:
#         return jsonify ({"message": "Bad user or password"}),400
#     if password is None:
#         return jsonify ({"message": "Bad user or password"}),400
#     user=User.query.filter_by(email=email, password=password).first()
#     if user is None:
#         return jsonify ({"message": "Bad user or password"}),401
#     else:
#         access_token = create_access_token(identity=user.id)
#         return jsonify({"token": access_token, "id":user.id}),200

# @api.route("/protected", methods=["GET"])
# @jwt_required()
# def protected():
#     current_user_id=get_jwt_identity()
#     user=User.query.get(current_user_id)
#     return jsonify({"id":user.id, "email":user.email})


