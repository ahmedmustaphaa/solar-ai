import React, { useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import { Chart as ChartJS, 
         CategoryScale, 
         LinearScale, 
         BarElement, 
         LineElement, 
         PointElement, // Register PointElement
         Title, 
         Tooltip, 
         Legend } from "chart.js";
import AOS from "aos";
import "aos/dist/aos.css";
import "./dashboard.css";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement, // Register PointElement
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Data for Energy Production Chart
  const energyData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
        label: "Energy Produced (kWh)",
        data: [320, 450, 410, 380, 500, 620, 580],
        backgroundColor: "rgba(46, 204, 113, 0.2)",
        borderColor: "#2ecc71",
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  // Data for Energy Consumption Chart
  const consumptionData = {
    labels: ["Household", "Industry", "Commercial", "Agriculture"],
    datasets: [
      {
        label: "Energy Consumption (kWh)",
        data: [150, 300, 200, 180],
        backgroundColor: ["#3498db", "#e74c3c", "#f1c40f", "#8e44ad"],
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <h2 className="title" data-aos="fade-down">Solar AI - Data Analysis Dashboard</h2>

      <div className="charts-container">
        {/* Energy Production Chart */}
        <div className="chart-box" data-aos="fade-right">
          <h3>Energy Production Over the Week</h3>
          <Line data={energyData} />
        </div>

        {/* Energy Consumption Chart */}
        <div className="chart-box" data-aos="fade-left">
          <h3>Energy Consumption Distribution</h3>
          <Bar data={consumptionData} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
