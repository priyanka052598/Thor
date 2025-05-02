import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
  } from "chart.js";
  
  ChartJS.register(ArcElement, Tooltip, Legend);
  

const CircularGraph = () => {
  const data = {
 
    datasets: [
      {
        label: "My Dataset",
        data: [300, 80, 30],
        backgroundColor: ["#1B69FF", "#FF2FB8", "#B4B6C5"],
        borderWidth: 6, // Increases the gap between data segments

      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return <Doughnut data={data}  />;
};

export default CircularGraph;
