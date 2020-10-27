import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "./Graph.css";

function Graph(props) {

    const [graphData, setGraphData] = useState([]);

    useEffect(() => {
      const loadGraph = async () => {
        const res = await fetch(
          `/api/holdings/current/${props.holding.ticker}`
        );
        res.data = await res.json();
        if (res.ok) {
          setGraphData(res.data.res.c);
        }
      };
      loadGraph();
    }, [props.holding.ticker]);

    const data = {
      labels: ["6wks", "5wks", "4wks", "3wks", "2wks", "1wk"],
      datasets: [
        {
          label: "Price History",
          data: graphData,
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
