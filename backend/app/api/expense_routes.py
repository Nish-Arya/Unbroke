from flask import Blueprint, jsonify, session, request
from app.models import Expense, db

expense_routes = Blueprint('expenses', __name__)

@expense_routes.route('/<user_id>', methods=['GET', 'POST', 'DELETE'])
def load_expenses(user_id):
    if (request.method=='GET'):
        expenses = db.session.query(Expense).filter(Expense.user_id == user_id)
        expenses_dict = {}
        for expense in expenses:
            expenses_dict[expense.id] = expense.to_dict()
        return {'expenses': expenses_dict}, 200
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
        expenses = db.session.query(Expense).filter(Expense.user_id == user_id)
        expenses_dict = {}
        for expense in expenses:
            expenses_dict[expense.id] = expense.to_dict()
        return {'expenses': expenses_dict}, 200
    elif (request.method=='DELETE'):
        data = request.get_json()
        id = data['id']
        expense = Expense.query.filter(Expense.id == id).first()
        db.session.delete(expense)
        db.session.commit()
        expenses = db.session.query(Expense).filter(Expense.user_id == user_id)
        expenses_dict = {}
        for expense in expenses:
            expenses_dict[expense.id] = expense.to_dict()
        return {'expenses': expenses_dict}, 200
