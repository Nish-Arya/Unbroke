from flask import Blueprint, jsonify, session, request
import os
import requests
import time
from app.models import Holding, db

holding_routes = Blueprint('holdings', __name__)

@holding_routes.route('/<user_id>', methods=['GET', 'POST', 'PATCH', 'DELETE'])
def load_holdings(user_id):
    if (request.method=='GET'):
        holdings = db.session.query(Holding).filter(Holding.user_id == user_id)
        holdings_dict = {}
        for holding in holdings:
            holdings_dict[holding.id] = holding.to_dict()
        return {'holdings': holdings_dict}, 200
    elif (request.method=='POST'):
        data = request.get_json()
        holding = Holding(
            ticker = data['ticker'],
            buy_price = data['buy_price'],
            num_of_shares = data['num_of_shares'],
            user_id = user_id
        )
        db.session.add(holding)
        db.session.commit()
        holdings = db.session.query(Holding).filter(Holding.user_id == user_id)
        holdings_dict = {}
        for holding in holdings:
            holdings_dict[holding.id] = holding.to_dict()
        return {'holdings': holdings_dict}, 200
    elif (request.method=='DELETE'):
        data = request.get_json()
        id = data['id']
        holding = Holding.query.get(id)
        db.session.delete(holding)
        db.session.commit()
        holdings = db.session.query(Holding).filter(Holding.user_id == user_id)
        holdings_dict = {}
        for holding in holdings:
            holdings_dict[holding.id] = holding.to_dict()
        return {'holdings': holdings_dict}, 200
    
@holding_routes.route('current/<ticker>')
def load_graph(ticker):
    api_key = os.environ.get("FINHUB_API_KEY")
    timestamp = int(time.time())
    res = requests.get(f'https://finnhub.io/api/v1/stock/candle?symbol={ticker}&resolution=D&from={timestamp-2592000}&to={timestamp}&token={api_key}').json()
    return {"res": res}, 200