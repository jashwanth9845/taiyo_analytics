import React from "react";
import { Line, Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import styles from "../css/charts.module.css";
import Loading from "../../loading/components/Loading";

// Register necessary plugins with Chart.js
Chart.register(...registerables);

/**
 * A React component for rendering a line chart of cases fluctuations.
 *
 * @param {Object} props - Component props
 * @param {Object} props.data - Data containing cases information
 * @param {boolean} props.isLoading - Indicates if data is currently being loaded
 * @param {boolean} props.isSuccess - Indicates if data was successfully loaded
 * @param {string} props.errorMessage - Error message in case of loading failure
 * @returns {JSX.Element|null} - The rendered component JSX or null
 */
const Charts = ({ data, isLoading, isSuccess, errorMessage }) => {
  // Render loading spinner while data is being loaded
  if (isLoading) {
    return <Loading />;
  }

  // Render an error message if loading has failed
  if (errorMessage) {
    return (
      <div style={{ position: "relative" }}>
        <div className="notFound extrnal">
          <p>{errorMessage}</p>
        </div>
      </div>
    );
  }

  // If loading was successful, render the chart
  if (isSuccess) {
    // Extract necessary data for the chart
    const casesData = data.cases;
    const labels = Object.keys(casesData).slice(0, 100);
    const values = Object.values(casesData).slice(0, 100);

    // Configure the chart data and appearance
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

    // Render the chart component
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

  // If no data to display, return null
  return null;
};

export default Charts;
