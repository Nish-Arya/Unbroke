from flask import Blueprint, jsonify, session, request
from app.models import User, db
import bcrypt

user_routes = Blueprint('users', __name__)

def set_password(password):
    hashed_password = bcrypt.hashpw(
        password.encode('utf-8'), bcrypt.gensalt())
    return hashed_password

@user_routes.route('/')
def load_user():
    if 'user' in session:
        user = session['user']
        return {"user": user}, 200
    else:
        return {"msg": "user not found"}


@user_routes.route('/', methods=['POST'])
def signup_user():
  data = request.get_json()
  try:
    username = data['username']
    email = data['email']
    hashed_password = set_password(data['password'])

    if not username or not email or not hashed_password:
        return jsonify(message="Username, email, and password required"), 400
    
    user = User(
        username=username,
        email=email,
        hashed_password=hashed_password
    )

    db.session.add(user)
    db.session.commit()
    
    session["user"]= user.to_dict()
    return {"user": session["user"]}, 200
  except:
    return jsonify({"msg": "Invalid data"}), 400
