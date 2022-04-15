import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";
// import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
  //   ChartDataLabels
);

const options = {
  layout: {
    padding: {
      top: 16,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  categoryPercentage: 0.85,
  barPercentage: 0.9,
  plugins: {
    // datalabels: {
    //   anchor: "end",
    //   clamp: true,
    //   align: "top",
    //   offset: 4,
    //   display: true,
    //   color: "#000",
    //   font: {
    //     size: 12,
    //     family: "Manrope",
    //   },
    //   formatter: (_, context) => {
    //     const data = context.chart.data;
    //     const { datasetIndex, dataIndex } = context;
    //     // return `${data.originalData[datasetIndex][dataIndex].toLocaleString()}`;
    //     console.log(data);
    //   },
    // },
    legend: {
      //   onClick: (e, legendItem, legend) => {
      //     const index = legendItem.datasetIndex;
      //     const ci = legend.chart;

      //     if (ci.isDatasetVisible(index)) {
      //       ci.hide(index);
      //       e.chart.boxes[1].legendItems[legendItem.datasetIndex].hidden = true;
      //     } else {
      //       ci.show(index);
      //       e.chart.boxes[1].legendItems[legendItem.datasetIndex].hidden = false;
      //     }
      //   },
      align: "start",

      labels: {
        boxWidth: 13,
        boxHeight: 13,
        usePointStyle: true,
        pointStyle: "rectRounded",

        font: {
          size: 14,
          family: "Manrope",
          weight: "bold",
        },
        padding: 15,

        generateLabels: (chart) => {
          chart.boxes[0].top = 0;
          const datasets = chart.data.datasets;
          const {
            labels: { usePointStyle, pointStyle, textAlign, color },
          } = chart.legend.options;
          return chart._getSortedDatasetMetas().map((meta) => {
            const style = meta.controller.getStyle(
              usePointStyle ? 0 : undefined
            );
            const borderWidth = 20;
            if (datasets[meta.index].type === "bar") {
              return {
                text: datasets[meta.index].label,
                fillStyle: style.backgroundColor,
                fontColor: color,
                hidden: !meta.visible,
                lineCap: style.borderCapStyle,
                lineDash: style.borderDash,
                lineDashOffset: style.borderDashOffset,
                lineJoin: style.borderJoinStyle,
                lineWidth: (borderWidth.width + borderWidth.height) / 4,
                strokeStyle: style.borderColor,
                pointStyle: pointStyle || style.pointStyle,
                rotation: style.rotation,
                textAlign: textAlign || style.textAlign,
                borderRadius: 0,
                datasetIndex: meta.index,
              };
            } else {
              return {
                text: datasets[meta.index].label,
                fillStyle: style.borderColor,
                fontColor: color,
                hidden: !meta.visible,
                lineCap: "butt",
                lineDash: style.borderDash,
                lineDashOffset: style.borderDashOffset,
                lineJoin: style.borderJoinStyle,
                lineWidth: 5,
                strokeStyle: style.borderColor,
                pointStyle: "line",
                rotation: style.rotation,
                textAlign: textAlign || style.textAlign,
                borderRadius: 0,
                datasetIndex: meta.index,
              };
            }
          }, this);
        },
      },
    },
  },

  scales: {
    x: {
      ticks: {
        font: {
          size: 14,
          family: "Manrope",
        },
        // callback: function (value) {
        //   return this.getLabelForValue(value);
        // },
      },
    },
    y: {
      ticks: {
        font: {
          size: 14,
          family: "Manrope",
        },
        // callback: function (value) {
        //   return this.getLabelForValue(value);
        // },
      },
    },
    y1: {
      grid: {
        drawOnChartArea: false,
      },
      position: "right",
      min: 0,
      max: 120,
      ticks: {
        callback: function (value) {
          if (value % 20 === 0) {
            return value + "%";
          } else {
            return "";
          }
        },
      },
    },
  },
};

const labels = [
  "11.01-17.01",
  "18.01-24.01",
  "25.01-31.01",
  "01.02-07.02",
  "08.02-14.02",
  "15.02-21.02",
  "22.02-28.02",
  "01.03-07.03",
  "08.03-14.03",
  "15.03-21.03",
  "22.03-28.03",
  "29.03-04.04",
];

const data = {
  labels,
  datasets: [
    {
      type: "line",
      label: "Выработка/Норма",
      borderColor: "black",
      borderWidth: 2,
      fill: false,
      pointRadius: 0,
      data: [
        2400, 2100, 2500, 2200, 2100, 2050, 1800, 1600, 1500, 1700, 1500, 150,
      ],
    },
    {
      type: "line",
      label: "Норма выработки",
      borderColor: "#9F72FF",
      borderWidth: 2,
      fill: false,
      pointRadius: 0,
      data: [
        2800, 2800, 2800, 2800, 2800, 2800, 2800, 3000, 3000, 3000, 3000, 3000,
      ],
    },
    {
      type: "line",
      label: "Норма в день",
      borderColor: "#9F72FF",
      borderWidth: 2,
      fill: false,
      pointRadius: 0,
      data: [557, 558, 589, 550, 556, 530, 427, 451, 385, 474, 413, 72],
    },
    {
      type: "bar",
      label: "Вырботка в день",
      data: [
        2584, 2590, 2745, 2600, 2528, 2449, 1836, 2007, 1675, 2119, 1813, 111,
      ],
      borderRadius: {
        topLeft: 7,
        topRight: 7,
        bottomLeft: 7,
        bottomRight: 7,
      },
      pointStyle: "rectRounded",
      borderSkipped: false,
      backgroundColor: "#FFAA64",
    },
    {
      type: "bar",
      label: "Выработка",
      data: [517, 518, 549, 520, 506, 490, 367, 401, 335, 424, 363, 22],
      borderRadius: {
        topLeft: 7,
        topRight: 7,
        bottomLeft: 7,
        bottomRight: 7,
      },
      pointStyle: "rectRounded",
      borderSkipped: false,
      backgroundColor: "#8CCCCC",
    },
  ],
};

const SummaryChart = () => {
  return <Chart type="bar" data={data} options={options} />;
};

export default SummaryChart;
