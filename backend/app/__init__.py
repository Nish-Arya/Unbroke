import os
from flask import Flask, render_template, request, session
from flask_cors import CORS
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_migrate import Migrate

from .models import db, User
from .api.user_routes import user_routes
from .api.session_routes import session_routes
from .api.expense_routes import expense_routes
from .api.goal_routes import goal_routes
from .api.holding_routes import holding_routes

from .config import Config

app = Flask(__name__)
app.config.from_object(Config)
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(session_routes, url_prefix='/api/session')
app.register_blueprint(expense_routes, url_prefix='/api/expenses')
app.register_blueprint(goal_routes, url_prefix='/api/goals')
app.register_blueprint(holding_routes, url_prefix='/api/holdings')
db.init_app(app)
Migrate(app, db)

## Application Security
CORS(app)
@app.after_request
def inject_csrf_token(response):
    response.set_cookie('csrf_token',
        generate_csrf(),
        secure=True if os.environ.get('FLASK_ENV') else False,
        samesite='Strict' if os.environ.get('FLASK_ENV') else None,
        httponly=True)
    return response


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    print("path", path)
    if path == 'favicon.ico':
        print("favicon route_____")
        return app.send_static_file('favicon.ico')
    print("index route_____")
    return app.send_static_file('index.html')
