import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import ChartjsPluginStacked100 from "chartjs-plugin-stacked100";
import { Bar } from "react-chartjs-2";

import { options, labels, bars } from "./config";

import json from "./data.json";

import dataLoader from "./utils/dataLoader";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels,
  ChartjsPluginStacked100
);

const data = dataLoader(bars, json, labels);

const PowerChart = () => {
  return <Bar options={options} data={data} />;
};

export default PowerChart;
