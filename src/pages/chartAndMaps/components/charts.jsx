import React from "react";
import { Line, Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import styles from "../css/charts.module.css";
import Loading from "../../loading/components/Loading";

Chart.register(...registerables);

const Charts = ({ data, isLoading, isSuccess, errorMessage }) => {
  if (isLoading) {
    return <Loading />;
  }
  if (errorMessage) {
    return (
      <div style={{ position: "relative" }}>
        <div className="notFound extrnal">
          <p>{errorMessage}</p>
        </div>
      </div>
    );
  }
  if (isSuccess) {
    const casesData = data.cases;
    const labels = Object.keys(casesData).slice(0, 100);
    const values = Object.values(casesData).slice(0, 100);

    const chartData = {
      labels: labels,
      datasets: [
        {
          label: "Total Cases",
          data: values,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          fill: true,
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

    return (
      <div className={styles.container}>
        <h3>Cases Fluctuations by Graph</h3>
        <Line
          data={chartData}
          options={options}
          className={styles.graphContainer}
        />
      </div>
    );
  }

  return null;
};

export default Charts;
