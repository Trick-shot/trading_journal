import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { color } from "chart.js/helpers";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title
);

const YearlyChart = () => {
  const [toggle, setToggle] = useState(true);

  const dataLine = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        type: "line",
        label: "net_profit",
        data: [60, 51, -19, 81, 56, 55, 40, 60, 10, 12, 100, 10],
        backgroundColor: "purple",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        fill: false,
      },
    ],
  };

  const dataBar = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Profit",
        data: [65, 59, 70, 81, 56, 55, 40, 60, 10, 12, 100, 10],
        backgroundColor: "light-red",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Loss",
        data: [65, 59, 80, 81, 56, 55, 40, 60, 10, 12, 100, 10],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };
  const [dataChart, setDataChart] = useState(dataBar);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Yearly Sales Data",
        color: "white",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#78879D",
        },
      },
      y: {
        grid: {
          display: true,
        },
        beginAtZero: true,
        ticks: {
          color: "#78879D",
        },
      },
    },
  };

  useEffect(() => {
    setDataChart(dataChart);

    const interval = setInterval(() => {
      setDataChart((prevData) => (toggle ? dataBar : dataLine));
      setToggle((prevToggle) => !prevToggle);
    }, 60000);

    return () => clearInterval(interval);
  }, [toggle]);

  return (
    <Box
      width="698px"
      height="297px"
      border="blue"
      borderWidth="1px"
      borderRadius="20px"
      bgColor="rgba(6, 12 ,33, 0.35)"
      p="2"
      mt="10px"
    >
      {dataChart && (
        <Bar data={dataChart} width="698px" height="297px" options={options} />
      )}
    </Box>
  );
};

export default YearlyChart;
