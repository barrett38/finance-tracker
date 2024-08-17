import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the components
ChartJS.register(ArcElement, Tooltip, Legend);

function Chart({ transactions }) {
  const categories = [...new Set(transactions.map((t) => t.category))];
  const data = categories.map((category) =>
    transactions
      .filter((t) => t.category === category)
      .reduce((acc, t) => acc + t.amount, 0)
  );

  const chartData = {
    labels: categories,
    datasets: [
      {
        data,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          // Add more colors if needed
        ],
      },
    ],
  };

  return <Pie data={chartData} />;
}

export default Chart;
