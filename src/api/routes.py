"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, JWTManager, jwt_required, get_jwt_identity

api = Blueprint('api', __name__)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

#INICIO DE PROYECTO
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
        return jsonify({"token": access_token}),200

@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    current_user_id=get_jwt_identity()
    user=User.query.get(current_user_id)
    return jsonify({"id":user.id, "email":user.email})


