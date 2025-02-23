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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#FFFFFF] rounded-lg shadow-lg w-full max-w-lg p-6">
        {/* Título */}
        <h2 className="text-2xl font-semibold text-[#1E293B] mb-4 text-center">
          Análisis del Test de Friedman
        </h2>

        {/* Datos clave */}
        <div className="mb-4 text-center">
          <p className="text-[#444444]">
            <strong>P-valor:</strong> {pValue}
          </p>
          <p className="text-[#444444]">
            <strong>Estadístico:</strong> {statistic}
          </p>
        </div>

        {/* Gráfico */}
        <div className="mb-4">
          <Bar data={data} options={options} />
        </div>

        {/* Conclusión */}
        <p className="text-[#444444] text-justify">
          No hay diferencias significativas entre los modelos en términos de
          error cuadrático medio (MSE). Los cuatro modelos tienen desempeños
          similares según esta prueba.
        </p>

        {/* Botón de cierre */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={onClose}
            className="bg-[#1E293B] hover:bg-[#11213b] text-white py-2 px-4 rounded-lg transition-all"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default FriedmanModal;
