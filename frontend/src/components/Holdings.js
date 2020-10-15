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
        <div className="holdings-container">
          <div className="holding-navlinks-container">
            {Object.values(holdings).map((holding) => {
              return (
                <NavLink
                  key={holding.id}
                  to={`/holding/${holding.id}`}
                  className="holding-navlink"
                  activeClassName="active-holding"
                >
                  <Holding holding={holding} key={holding.id} />
                </NavLink>
              );
            })}
          </div>
          <div className="holding-graph-container">
            <Switch>
              {Object.values(holdings).map((holding) => {
                return <Route path="/holding/:id">
                  <Graph holding={holding}/>
                </Route>;
              })}
            </Switch>
          </div>
        </div>
      </div>
    );
}

export default Holdings;
