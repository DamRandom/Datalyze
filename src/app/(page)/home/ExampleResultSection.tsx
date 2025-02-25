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
        Ejemplo de Visualización de Resultados
      </h2>
      <p className="text-[#444444] text-justify mb-4">
        A continuación se muestra un ejemplo de la visualización de los resultados obtenidos en el análisis de la Prueba de Friedman. Este gráfico muestra los valores del Error Cuadrático Medio (MSE) para cuatro modelos diferentes, representados en el eje horizontal. El eje vertical indica el valor del MSE, donde se puede observar que todos los modelos tienen resultados relativamente similares. Este análisis ayuda a evaluar la efectividad de cada modelo en función del MSE, proporcionando una visión clara de su rendimiento.
      </p>

      <div className="mb-4 text-center">
        <p className="text-[#444444]">
          <strong>Valor-P:</strong> {pValue}
        </p>
        <p className="text-[#444444]">
          <strong>Estadística:</strong> {statistic}
        </p>
      </div>

      {/* Chart with adjusted size */}
      <div className="mb-4" style={{ width: '80%', maxWidth: '600px', margin: '0 auto' }}>
        <Bar data={data} options={options} height={250} />
      </div>

      {/* Conclusion */}
      <p className="text-[#444444] text-justify">
        No hay diferencias significativas entre los modelos en términos de Error Cuadrático Medio (MSE). Los cuatro modelos tienen un rendimiento similar según esta prueba.
      </p>
    </div>
  );
};

export default ExampleResultsSection;
