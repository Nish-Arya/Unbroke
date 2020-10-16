import React, { useEffect } from "react";
import {  NavLink, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setHoldings } from "../store/holdings";
import HoldingForm from "./HoldingForm";
import "./Holdings.css";
import Holding from "./Holding";
import Graph from "./Graph";

function Holdings() {

    const user_id = useSelector((state) => state.auth.id);
    const holdings = useSelector((state) => state.holdings);
    const dispatch = useDispatch();

    useEffect(() => {
      const loadHoldings = async () => {
        const res = await fetch(`/api/holdings/${user_id}`);
        res.data = await res.json();
        if (res.ok) {
          dispatch(setHoldings(res.data.holdings));
        }
      };
      loadHoldings();
    }, [dispatch, user_id]);
    
    return (
      <div className="holdings">
        <div className="holdings-form-container">
          <HoldingForm />
        </div>
        <div className="holdings-titles-container">
          <div className="holding-navlinks-container">
            <div className="holding-title-container">
              <div>Ticker</div>
              <div>Price</div>
              <div>Return(%)</div>
              <div>Buy-Price</div>
              <div>Quantity</div>
              <div>Position($)</div>
            </div>
            <div className='holdings-container'>
              {Object.values(holdings).map((holding) => {
                return (
                  <NavLink
                    key={holding.id}
                    to={`/stock-holdings/holding/${holding.id}`}
                    className="holding-navlink"
                    activeClassName="active-holding"
                  >
                    <Holding holding={holding} key={holding.id} />
                  </NavLink>
                );
              })}
            </div>
          </div>
          <div className="holding-graph-container">
            <Switch>
              {Object.values(holdings).map((holding) => {
                return (
                  <Route
                    key={holding.id}
                    exact
                    path={`/stock-holdings/holding/${holding.id}`}
                  >
                    <Graph key={holding.id} holding={holding} />
                  </Route>
                );
              })}
            </Switch>
          </div>
        </div>
      </div>
    );
}

export default Holdings;
