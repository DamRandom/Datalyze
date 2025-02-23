import { useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "tailwindcss/tailwind.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Processed dataset
const dataset = [
  { V1: 2011, V2: 1, V3: 41, V4: 102, V5: 641, V6: 1014, V7: 1798, V8: 37, V9: 99, V10: 583, V11: 923, V12: 1642 },
  { V1: 2011, V2: 2, V3: 37, V4: 99, V5: 583, V6: 923, V7: 1642, V8: 33, V9: 96, V10: 521, V11: 709, V12: 1359 },
  { V1: 2012, V2: 1, V3: 33, V4: 96, V5: 521, V6: 709, V7: 1359, V8: 31, V9: 96, V10: 498, V11: 525, V12: 1150 },
  { V1: 2012, V2: 2, V3: 31, V4: 96, V5: 498, V6: 525, V7: 1150, V8: 30, V9: 94, V10: 488, V11: 482, V12: 1094 },
];

// Prepare data for the charts
const lineChartData = {
  datasets: [
    {
      label: "V3 a lo Largo del Tiempo",
      data: dataset.map((row) => row.V3),
      borderColor: "#a1acaf",
      backgroundColor: "#a1acaf",
      fill: true,
      tension: 0.1,
    },
    {
      label: "V4 a lo Largo del Tiempo",
      data: dataset.map((row) => row.V4),
      borderColor: "#4b5d67",
      backgroundColor: "#4b5d67",
      fill: true,
      tension: 0.1,
    },
  ],
  labels: dataset.map((row) => `${row.V1}-${row.V2}`),
};

const barChartData = {
  datasets: [
    {
      label: "Distribución de V5",
      data: dataset.map((row) => row.V5),
      backgroundColor: "#a1acaf",
    },
    {
      label: "Distribución de V6",
      data: dataset.map((row) => row.V6),
      backgroundColor: "#4b5d67",
    },
  ],
  labels: dataset.map((row) => `${row.V1}-${row.V2}`),
};

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: true,
    });
  }, []);

  return (
    <section className="bg-[#f4f4f4] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <h2 className="text-4xl font-semibold text-center text-[#333] mb-12" data-aos="fade-up">
          Visualización de Preprocesamiento de Datos
        </h2>

        {/* Duplicated Visualization */}
        <section className="mb-16" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-2xl font-semibold text-[#444] mb-4">Verificación de Duplicados</h2>
          <p className="text-[#555]">
            No se encontraron filas duplicadas en el conjunto de datos. Todas las filas son únicas.
          </p>
        </section>

        {/* Null visualization */}
        <section className="mb-16" data-aos="fade-up" data-aos-delay="400">
          <h2 className="text-2xl font-semibold text-[#444] mb-4">Valores Nulos</h2>
          <p className="text-[#555]">
            No se detectaron valores nulos. El conjunto de datos está completo.
          </p>
        </section>

        {/* Lines chart */}
        <section className="mb-16" data-aos="fade-up" data-aos-delay="600">
          <h2 className="text-2xl font-semibold text-[#444] mb-4">Tendencias a lo Largo del Tiempo</h2>
          <div className="bg-[#fff] p-6 rounded-lg shadow-lg mx-auto w-full max-w-4xl">
            <Line data={lineChartData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </section>

        {/* Bar chart */}
        <section className="mb-16" data-aos="fade-up" data-aos-delay="800">
          <h2 className="text-2xl font-semibold text-[#444] mb-4">Distribución de Características</h2>
          <div className="bg-[#fff] p-6 rounded-lg shadow-lg mx-auto w-full max-w-4xl">
            <Bar data={barChartData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </section>
      </div>
    </section>
  );
};

export default App;
