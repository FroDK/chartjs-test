type TMonth =
  | "Январь"
  | "Февраль"
  | "Март"
  | "Апрель"
  | "Май"
  | "Июнь"
  | "Июль"
  | "Август"
  | "Сентябрь"
  | "Октябрь"
  | "Ноябрь"
  | "Декабрь";

type TLabel = {
  month: TMonth;
  hours: number;
};

export type TLabels = TLabel[];

export type TTimePoint = {
  timePoint: string;
  fact_commercial_labor: string;
  fact_non_commercial_labor: string;
  fact_commercial_gph: string;
  fact_non_commercial_gph: string;
  plan_worktime: string;
  commercial_absolute: string;
  non_commercial_absolute: string;
  bench_absolute: string;
  plan_worktime_per_day: string;
  fact_worktime_per_day: string;
};

type TTimePoints = TTimePoint[];

export type TData = {
  timePoints: TTimePoints;
};

type TBorderRadius = {
  topLeft: number;
  topRight: number;
  bottomLeft: number;
  bottomRight: number;
};

export type TBar = {
  label: string;
  data: string[];
  borderRadius: TBorderRadius;
  pointStyle: string;
  borderWidth: number;
  borderColor: string;
  borderSkipped: boolean;
  backgroundColor: string;
};

export type TBars = {
  commercial_absolute: TBar;
  bench_absolute: TBar;
  non_commercial_absolute: TBar;
};
