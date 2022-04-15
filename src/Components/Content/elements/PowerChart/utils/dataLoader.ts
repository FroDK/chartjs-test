import { TLabels, TData, TTimePoint, TBars } from "../types";

const dataLoader = (bars: TBars, data: TData, labels: TLabels) => {
  Object.keys(bars).forEach((key) => {
    bars[key as keyof TBars].data = [];
  });

  data.timePoints.forEach((el: TTimePoint) => {
    bars.commercial_absolute.data.push(el.commercial_absolute);
    bars.non_commercial_absolute.data.push(el.non_commercial_absolute);
    bars.bench_absolute.data.push(el.bench_absolute);
  });

  return { labels, datasets: Object.values(bars) };
};

export default dataLoader;
