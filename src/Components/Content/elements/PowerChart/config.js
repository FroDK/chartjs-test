const bars = {
  commercial_absolute: {
    label: "Коммерческая работа",
    data: [],
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

  bench_absolute: {
    label: "Простой",
    data: [],
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

  non_commercial_absolute: {
    label: "Внутренние часы",
    data: [],
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
};

const labels = [
  { month: "Январь" },
  { month: "Ферваль" },
  { month: "Март" },
  { month: "Апрель" },
  { month: "Май" },
  { month: "Июнь" },
  { month: "Июль" },
  { month: "Август" },
  { month: "Сентябрь" },
  { month: "Октябрь" },
  { month: "Ноябрь" },
  { month: "Декабрь" },
];

const options = {
  layout: {
    padding: {
      top: 16,
    },
  },
  plugins: {
    stacked100: { enable: true, replaceTooltipLabel: false },
    datalabels: {
      anchor: "end",
      clamp: true,
      align: "bottom",
      offset: 4,
      display: true,
      color: "#fff",
      font: {
        size: 12,
        family: "Manrope",
      },
      formatter: (_, context) => {
        const data = context.chart.data;
        const { datasetIndex, dataIndex } = context;
        return (+`${data.originalData[datasetIndex][dataIndex]}`).toLocaleString();
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
        title: (tooltipItem) => {
          const data = tooltipItem[0].chart.data;
          const index = tooltipItem[0].dataIndex;
          const month = data.labels[index].month;

          return month;
        },
        label: (tooltipItem) => {
          const data = tooltipItem.chart.data;
          const datasetIndex = tooltipItem.datasetIndex;
          const index = tooltipItem.dataIndex;
          const rateValue = data.calculatedData[datasetIndex][index];

          return `${data.datasets[datasetIndex].label}: ${rateValue}%`;
        },
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  categoryPercentage: 1,
  barPercentage: 0.7,
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
        callback: function (value) {
          return this.getLabelForValue(value).month;
        },
      },
    },
    x1: {
      grid: {
        drawOnChartArea: false,
      },
      position: "top",
      ticks: {
        font: {
          size: 14,
          family: "Manrope",
        },
        callback: function (value) {
          return this.getLabelForValue(value).hours;
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

export { options, labels, bars };
