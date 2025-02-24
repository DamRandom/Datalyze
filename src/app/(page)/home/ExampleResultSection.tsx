"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const ExampleResultsSection: React.FC = () => {
  const pValue = 0.987; 
  const statistic = 0.138; 
  const models = ["Model 1", "Model 2", "Model 3", "Model 4"];
  const mseValues = [0.25, 0.27, 0.26, 0.28]; 

  const data = {
    labels: models,
    datasets: [
      {
        label: "MSE (Mean Squared Error)",
        data: mseValues,
        backgroundColor: ["#1E293B", "#1e2d44", "#142746", "#11213b"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="my-8 p-6 bg-white rounded-lg">
      <h2 className="text-2xl font-semibold text-[#1E293B] mb-4 text-center">
        Example of Results Visualization
      </h2>
      <p className="text-[#444444] text-justify mb-4">
        Below is an example of the visualization of the results obtained in the Friedman Test analysis. This graph shows the Mean Squared Error (MSE) values for four different models, represented on the horizontal axis. The vertical axis indicates the MSE value, where it can be observed that all models have relatively similar results. This analysis helps evaluate the effectiveness of each model based on MSE, providing a clear view of their performance.
      </p>

      <div className="mb-4 text-center">
        <p className="text-[#444444]">
          <strong>P-value:</strong> {pValue}
        </p>
        <p className="text-[#444444]">
          <strong>Statistic:</strong> {statistic}
        </p>
      </div>

      {/* Chart with adjusted size */}
      <div className="mb-4" style={{ width: '80%', maxWidth: '600px', margin: '0 auto' }}>
        <Bar data={data} options={options} height={250} />
      </div>

      {/* Conclusion */}
      <p className="text-[#444444] text-justify">
        There are no significant differences between the models in terms of Mean Squared Error (MSE). All four models have similar performances according to this test.
      </p>
    </div>
  );
};

export default ExampleResultsSection;
