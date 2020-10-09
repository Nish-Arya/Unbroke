from flask import Blueprint, jsonify, session, request
from app.models import Expense, db

expense_routes = Blueprint('expenses', __name__)

@expense_routes.route('/<user_id>', methods=['GET', 'POST'])
def load_expenses(user_id):
    if (request.method=='GET'):
        expenses = db.session.query(Expense).filter(Expense.user_id == user_id)
        expenses_dict = {}
        for expense in expenses:
            expenses_dict[expense.id] = expense.to_dict()
        return expenses_dict
    elif (request.method=='POST'):
        data = request.get_json()
        expense = Expense(
            description = data['description'],
            amount = data['amount'],
            category_id = data['category_id'],
            user_id = user_id
        )
        db.session.add(expense)
        db.session.commit()
        return expense.to_dict()