import React from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Chart, Bar, Pie, Doughnut } from "react-chartjs-2";
ChartJS.register(...registerables);

export const DoughnutChart = ({ data, options }) => {
  return (
    <div>
      <Doughnut
        height={200}
        width={300}
        data={{
          labels: ["Đúng", "Sai"],
          datasets: [
            {
              label: "# of Votes",
              data: [data[0], data[1]],
              backgroundColor: ["#3CAE28", "#DB4840"],
              borderColor: ["white", "white"],
              borderWidth: 2,
            },
          ],
          hoverOffset: 4,
        }}
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "bottom",
            },
          },
        }}
      ></Doughnut>
    </div>
  );
};
