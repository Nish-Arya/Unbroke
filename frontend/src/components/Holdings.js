import React, { Component } from 'react'
import HoldingForm from './HoldingForm';
import "./Holdings.css";

export class Holdings extends Component {
    render() {
        return (
          <div className="holdings">
            <div className="holdings-form-container">
              <HoldingForm />
            </div>
            <div className="holdings-container"></div>
          </div>
        );
    }
}

export default Holdings
