from flask import Blueprint, jsonify, session, request
from app.models import Expense, db

expense_routes = Blueprint('expenses', __name__)

@expense_routes.route('/<user_id>')
def load_expenses(user_id):
    expenses = db.session.query(Expense).filter(Expense.user_id == user_id)
    expenses_dict = {}
    for expense in expenses:
        expenses_dict[expense.id] = expense.to_dict()
    return expenses_dict