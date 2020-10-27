import React from 'react';
import { Line } from "react-chartjs-2";

function Graph(props) {

    const data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "First dataset",
          data: [33, 53, 85, 41, 44, 65],
          fill: true,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)",
        },
        {
          label: "Second dataset",
          data: [33, 25, 35, 51, 54, 76],
          fill: false,
          borderColor: "#742774",
        },
      ],
    };
    
    return (
      <div>
        {props.holding.ticker}
        <div className="graph-holder">
          <Line data={data} />
        </div>
      </div>
    );
}

export default Graph;
