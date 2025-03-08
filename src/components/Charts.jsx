import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from "chart.js";
import "./Charts.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

function Charts() {
  // Bar Chart Data (Voting Trends)
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Votes Cast",
        data: [120, 200, 150, 220, 300, 280],
        backgroundColor: "#3498db",
      },
    ],
  };

  // Line Chart Data (Revenue Growth)
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue ($)",
        data: [5000, 8000, 7500, 10000, 12000, 15000],
        borderColor: "#f1c40f",
        backgroundColor: "rgba(241, 196, 15, 0.2)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="charts-container">
      <div className="chart">
        <h3>Voting Trends</h3>
        <Bar data={barData} />
      </div>

      <div className="chart">
        <h3>Revenue Growth</h3>
        <Line data={lineData} />
      </div>
    </div>
  );
}

export default Charts;