from flask import Blueprint, jsonify, session, request
from app.models import User
import bcrypt

session_routes = Blueprint('session', __name__)

def verify_password(password, hashed_password):
    if bcrypt.checkpw(password.encode('utf-8'), hashed_password):
        return True
    else:
        return False

@session_routes.route('/', methods=['POST', 'DELETE'])
def login_logout_user():
    if (request.method=='POST'):
        data = request.get_json()

        email = data['email']
        password = data['password']

        user = User.query.filter(User.email==email).first()
        verified = verify_password(password, user.hashed_password)

        if (user and verified):
            session['user'] = user.to_dict()
            return {"user": session['user']}, 200
        else:
            return jsonify({"message": "Invalid credentials!."}), 400

    elif (request.method=='DELETE'):
        session.pop('user', None)
        return {"message": "Successfully logged out!"}