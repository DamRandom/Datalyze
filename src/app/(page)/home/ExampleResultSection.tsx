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

// Registrar los componentes necesarios de Chart.js
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

// Datos procesados del dataset
const dataset = [
  { V1: 2011, V2: 1, V3: 41, V4: 102, V5: 641, V6: 1014, V7: 1798, V8: 37, V9: 99, V10: 583, V11: 923, V12: 1642 },
  { V1: 2011, V2: 2, V3: 37, V4: 99, V5: 583, V6: 923, V7: 1642, V8: 33, V9: 96, V10: 521, V11: 709, V12: 1359 },
  { V1: 2012, V2: 1, V3: 33, V4: 96, V5: 521, V6: 709, V7: 1359, V8: 31, V9: 96, V10: 498, V11: 525, V12: 1150 },
  { V1: 2012, V2: 2, V3: 31, V4: 96, V5: 498, V6: 525, V7: 1150, V8: 30, V9: 94, V10: 488, V11: 482, V12: 1094 },
];

// Prepara los datos para las gráficas
const lineChartData = {
  datasets: [
    {
      label: "V3 Over Time",
      data: dataset.map((row) => row.V3),
      borderColor: "#a1acaf", 
      backgroundColor: "#a1acaf", 
      fill: true,
      tension: 0.1, 
    },
    {
      label: "V4 Over Time",
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
      label: "V5 Distribution",
      data: dataset.map((row) => row.V5),
      backgroundColor: "#a1acaf", 
    },
    {
      label: "V6 Distribution",
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
        {/* Título de la sección */}
        <h2 className="text-4xl font-semibold text-center text-[#333] mb-12" data-aos="fade-up">
          Data Preprocessing Visualization
        </h2>

        {/* Visualización de Duplicados */}
        <section className="mb-16" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-2xl font-semibold text-[#444] mb-4">Duplicate Check</h2>
          <p className="text-[#555]">
            No duplicate rows were found in the dataset. All rows are unique.
          </p>
        </section>

        {/* Visualización de Nulos */}
        <section className="mb-16" data-aos="fade-up" data-aos-delay="400">
          <h2 className="text-2xl font-semibold text-[#444] mb-4">Null Values</h2>
          <p className="text-[#555]">
            No null values were detected. The dataset is complete.
          </p>
        </section>

        {/* Gráfica de líneas */}
        <section className="mb-16" data-aos="fade-up" data-aos-delay="600">
          <h2 className="text-2xl font-semibold text-[#444] mb-4">Trends Over Time</h2>
          <div className="bg-[#fff] p-6 rounded-lg shadow-lg mx-auto w-full max-w-4xl">
            <Line data={lineChartData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </section>

        {/* Gráfica de barras */}
        <section className="mb-16" data-aos="fade-up" data-aos-delay="800">
          <h2 className="text-2xl font-semibold text-[#444] mb-4">Feature Distribution</h2>
          <div className="bg-[#fff] p-6 rounded-lg shadow-lg mx-auto w-full max-w-4xl">
            <Bar data={barChartData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </section>
      </div>
    </section>
  );
};

export default App;
