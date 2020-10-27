import React from 'react';
import { Line } from "react-chartjs-2";
import "./Graph.css";

function Graph(props) {

    const data = {
      labels: ["6wks", "5wks", "4wks", "3wks", "2wks", "1wk"],
      datasets: [
        {
          label: "Price History",
          data: [33, 53, 85, 41, 44, 650],
          fill: false,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)",
        },
      ],
    };
    
    return (
      <div>
        <div className="graph-holder">
          <h1>{props.holding.ticker.toUpperCase()} PRICE CHART</h1>
          <Line data={data} />
        </div>
      </div>
    );
}

export default Graph;
