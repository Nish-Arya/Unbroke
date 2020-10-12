from flask import Blueprint, jsonify, session, request
from app.models import Goal, db

goal_routes = Blueprint('goals', __name__)

@goal_routes.route('/<user_id>', methods=['GET', 'POST', 'DELETE'])
def load_goals(user_id):
    if (request.method=='GET'):
        goals = db.session.query(Goal).filter(Goal.user_id == user_id)
        goals_dict = {}
        for goal in goals:
            goals_dict[goal.id] = goal.to_dict()
        return {'goals': goals_dict}, 200
    elif (request.method=='POST'):
        data = request.get_json()
        goal = Goal(
            description = data['description'],
            amount = data['amount'],
            completion_year = data['completion_year'],
            completion_month = data['completion_month'],
            user_id = user_id
        )
        db.session.add(goal)
        db.session.commit()
        goals = db.session.query(Goal).filter(Goal.user_id == user_id)
        goals_dict = {}
        for goal in goals:
            goals_dict[goal.id] = goal.to_dict()
        return {'goals': goals_dict}, 200