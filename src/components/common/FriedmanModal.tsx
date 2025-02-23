"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

interface FriedmanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FriedmanModal: React.FC<FriedmanModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const pValue = 0.987;
  const statistic = 0.138;
  const models = ["Modelo 1", "Modelo 2", "Modelo 3", "Modelo 4"];
  const mseValues = [0.25, 0.27, 0.26, 0.28];

  const data = {
    labels: models,
    datasets: [
      {
        label: "MSE (Error Cuadrático Medio)",
        data: mseValues,
        backgroundColor: ["#2563EB", "#60A5FA", "#93C5FD", "#BFDBFE"],
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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
        {/* Título */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Análisis del Test de Friedman
        </h2>

        {/* Datos clave */}
        <div className="mb-4 text-center">
          <p className="text-gray-700">
            <strong>P-valor:</strong> {pValue}
          </p>
          <p className="text-gray-700">
            <strong>Estadístico:</strong> {statistic}
          </p>
        </div>

        {/* Gráfico */}
        <div className="mb-4">
          <Bar data={data} options={options} />
        </div>

        {/* Conclusión */}
        <p className="text-gray-600 text-center">
          No hay diferencias significativas entre los modelos en términos de
          error cuadrático medio (MSE). Los cuatro modelos tienen desempeños
          similares según esta prueba.
        </p>

        {/* Botón de cierre */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={onClose}
            className="bg-[#2563EB] hover:bg-[#1E40AF] text-white py-2 px-4 rounded-lg transition-all"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default FriedmanModal;
