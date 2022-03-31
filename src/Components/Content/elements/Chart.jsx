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

const options = {
  layout: {
    padding: {
      top: 30,
    },
  },
  plugins: {
    stacked100: { enable: true, replaceTooltipLabel: false },
    datalabels: {
      display: false,
      color: "#000",
      font: {
        size: 22,
      },
      formatter: function (value, context) {
        return value.nested.hours;
      },
    },
    legend: {
      onClick: (e, legendItem, legend) => {
        const index = legendItem.datasetIndex;
        const ci = legend.chart;

        if (ci.isDatasetVisible(index)) {
          ci.hide(index);
          e.chart.boxes[1].legendItems[legendItem.datasetIndex].hidden = true;
        } else {
          ci.show(index);
          e.chart.boxes[1].legendItems[legendItem.datasetIndex].hidden = false;
        }
      },
      align: "start",
      labels: {
        padding: 15,
        generateLabels: (chart) => {
          chart.boxes[1].top = 0;

          const datasets = chart.data.datasets;
          const {
            labels: { usePointStyle, pointStyle, textAlign, color },
          } = chart.legend.options;
          return chart._getSortedDatasetMetas().map((meta) => {
            const style = meta.controller.getStyle(
              usePointStyle ? 0 : undefined
            );
            const borderWidth = 20;
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
          }, this);
        },

        boxWidth: 13,
        boxHeight: 13,
        usePointStyle: true,
        pointStyle: "rectRounded",
        font: {
          size: 14,
          family: "Manrope",
          weight: "bold",
        },
      },
    },
    tooltip: {
      padding: 13,
      boxWidth: 13,
      boxHeight: 13,
      boxPadding: 3,
      usePointStyle: true,
      titleFont: {
        size: 16,
        family: "Manrope",
      },
      bodyFont: {
        size: 14,
        family: "Manrope",
      },
      callbacks: {
        labelColor: function (context) {
          return {
            borderColor: context.dataset.backgroundColor,
            backgroundColor: context.dataset.backgroundColor,
            borderRadius: 2,
          };
        },
        label: (tooltipItem) => {
          const data = tooltipItem.chart.data;
          const datasetIndex = tooltipItem.datasetIndex;
          const index = tooltipItem.dataIndex;
          const datasetLabel = data.datasets[datasetIndex].label || "";
          // You can use two type values.
          // `data.originalData` is raw values,
          // `data.calculatedData` is percentage values, e.g. 20.5 (The total value is 100.0)
          const originalValue = data.originalData[datasetIndex][index];
          const rateValue = data.calculatedData[datasetIndex][index];

          const hours = originalValue.toLocaleString();

          return `${datasetLabel}: ${rateValue}% - ${hours}ч`;
        },
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  categoryPercentage: 1,
  barPercentage: 0.5,
  scales: {
    x: {
      grid: {
        borderDash: [4, 4],
      },
      stacked: true,
      ticks: {
        font: {
          size: 14,
          family: "Manrope",
        },
      },
    },
    y: {
      stacked: true,
      ticks: {
        font: {
          size: 14,
          family: "Manrope",
        },
        callback: function (value, index, ticks) {
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
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const data = {
  labels,
  datasets: [
    {
      label: "Внутренние часы",
      data: [450, 580, 114],
      borderRadius: {
        topLeft: 7,
        topRight: 7,
        bottomLeft: 7,
        bottomRight: 7,
      },
      pointStyle: "rectRounded",
      borderWidth: 2,
      borderColor: "#ffffff00",
      borderSkipped: false,
      backgroundColor: "#FFAA64",
    },
    {
      label: "Простой",
      data: [999, 210, 322],
      borderRadius: {
        topLeft: 7,
        topRight: 7,
        bottomLeft: 7,
        bottomRight: 7,
      },
      pointStyle: "rectRounded",
      borderWidth: 2,
      borderColor: "#ffffff00",
      borderSkipped: false,
      backgroundColor: "#9F72FF",
    },
    {
      label: "Коммерческая работа",
      data: [290, 525, 490],
      borderRadius: {
        topLeft: 7,
        topRight: 7,
        bottomLeft: 7,
        bottomRight: 7,
      },
      pointStyle: "rectRounded",
      borderWidth: 2,
      borderColor: "#ffffff00",
      borderSkipped: false,
      backgroundColor: "#8CCCCC",
    },
  ],
};

const ChartTest = () => {
  return <Bar options={options} data={data} />;
};

export default ChartTest;
