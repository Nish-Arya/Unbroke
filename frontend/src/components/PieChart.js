import React from 'react';
import { useSelector } from "react-redux";
import { Pie, Chart } from 'react-chartjs-2';
import './PieChart.css'

function PieChart() {

    const expenses = useSelector((state) => state.expenses);
    const labels = ['Housing', 'Transportation', 'Utilities', 'Food', 'Clothing', 'Insurance', 'Miscellaneous'];

    const totalCalculator = (category) => {
      let total = 0;
      for (let expense in expenses) {
        if (expenses[expense].expense_category === category) {
          total += expenses[expense].amount;
        }
      }
      return total;
    };

    Chart.defaults.global.defaultFontFamily =
      "'Courier New', Courier, monospace";

    return (
      <div className="pie-chart-container">
        <Pie
          className="pie-chart"
          data={{
            labels: labels,
            datasets: [
              {
                data: [
                  totalCalculator("Housing"),
                  totalCalculator("Transportation"),
                  totalCalculator("Utilities"),
                  totalCalculator("Food"),
                  totalCalculator("Clothing"),
                  totalCalculator("Insurance"),
                  totalCalculator("Miscellaneous"),
                ],
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
            ],
          }}
          height={280}
          options={{
            layout: {
              padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              },
            },
            maintainAspectRatio: false,
            legend: {
              position: "bottom",
              labels: {
                boxWidth: 50,
                padding: 25,
                fontColor: "#1A77A3",
                fontSize: 15,
              },
            },
            title: {
              display: true,
              text: "YOUR EXPENSES DISTRIBUTION BY CATEGORIES",
              padding: 15,
              fontSize: 23,
              fontColor: "#1A77A3",
            },
          }}
        />
      </div>
    );
}

export default PieChart;
