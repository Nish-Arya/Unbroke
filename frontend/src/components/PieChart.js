import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import './PieChart.css'

function PieChart() {

    const [labels] = useState(['Housing', 'Transportation', 'Utilities', 'Food', 'Clothing', 'Insurance', 'Miscellaneous']);
    const [datasets] = useState([
      {
        data: [750, 30, 80, 150, 80, 80, 40],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(155, 49, 146)",
        ],
      },
    ]);

    return (
      <div className="pie-chart-container">
        <Pie
          className="pie-chart"
          data={{
            labels: labels,
            datasets: datasets,
          }}
          height={250}
          options={{
            layout: {
              padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              },
            },
            legend: {
              position: "bottom",
              labels: {
                boxWidth: 60,
                padding: 25,
                fontColor: "#1A77A3",
              },
            },
            title: {
              display: true,
              text: "Your expenses distribution by Categories",
              padding: 15,
              fontSize: 17,
              fontColor: "#1A77A3",
            },
          }}
        />
      </div>
    );
}

export default PieChart;
