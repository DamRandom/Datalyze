import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar los componentes de Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const exampleData = {
  labels: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
  datasets: [
    {
      label: 'Current Total',
      data: [200, 205, 210, 215, 220, 230, 235, 240, 250, 260, 270],
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
      tension: 0.4,
    },
    {
      label: 'Next Year Total',
      data: [211, 217, 223, 228, 233, 243, 248, 253, 263, 273, 283],
      borderColor: 'rgb(153, 102, 255)',
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      fill: true,
      tension: 0.4,
    }
  ],
};

const ExampleResultSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Duration of animations
      once: true,      // Animation triggers only once
    });
  }, []);

  return (
    <div className="relative flex flex-col bg-gray-50 p-12">
      <h2 className="text-4xl font-semibold text-gray-800 text-center mb-16">Example Result</h2>

      {/* Graphs and Data */}
      <div className="flex flex-col space-y-12">
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0" data-aos="fade-up" data-aos-delay="100">
          {/* Graph */}
          <div className="flex justify-center md:w-1/2 px-6 md:px-8">
            <Line data={exampleData} options={{
              responsive: true,
              plugins: {
                title: {
                  display: true,
                  text: 'Forecasting Comparison: Current vs Next Year'
                },
                tooltip: {
                  mode: 'nearest',
                  intersect: false,
                },
              },
              scales: {
                x: {
                  title: {
                    display: true,
                    text: 'Year',
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: 'Total Faculty Count',
                  },
                },
              },
            }} />
          </div>

          {/* Description */}
          <div className="flex flex-col md:w-1/2 text-justify px-6 md:px-8">
            <div className="text-2xl font-semibold text-gray-800 mb-4 text-center md:text-left">
              Faculty Growth Forecast
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              This graph compares the current faculty count (Total Actual) with the projected faculty count (Total Next Year) across several years. It provides a clear visual representation of how the number of staff is expected to grow, aiding decision-makers in their resource planning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExampleResultSection;
