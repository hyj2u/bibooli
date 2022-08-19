import VegaLite from "react-vega-lite";
import data from "./data1";

const spec = {
  config: {
    background: "#0e1117",
    axis: {
      labelColor: "#fafafa",
      titleColor: "#fafafa",
      gridColor: "rgba(250, 250, 250, 0.2)",
      labelFont: "\"Source Sans Pro\", sans-serif",
      titleFont: "\"Source Sans Pro\", sans-serif",
      labelFontSize: 12,
      titleFontSize: 12
    },
    legend: {
      labelColor: "#fafafa",
      titleColor: "#fafafa",
      labelFont: "\"Source Sans Pro\", sans-serif",
      titleFont: "\"Source Sans Pro\", sans-serif",
      labelFontSize: 12,
      titleFontSize: 12
    },
    title: {
      color: "#fafafa",
      subtitleColor: "#fafafa",
      labelFont: "\"Source Sans Pro\", sans-serif",
      titleFont: "\"Source Sans Pro\", sans-serif",
      labelFontSize: 12,
      titleFontSize: 12
    },
    header: {labelColor: "#fafafa"},
    view: {continuousWidth: 400, continuousHeight: 300}
  },
  description: data,
  mark: "line",
  data: data,
  encoding: {
    color: {field: "variable", title: "", type: "nominal"},
    opacity: {value: 1},
    tooltip: [
      {field: "timestamp", type: "nominal"},
      {field: "value", type: "quantitative"},
      {field: "variable", type: "nominal"}
    ],
    x: {field: "timestamp", title: "", type: "nominal"},
    y: {field: "value", title: "", type: "quantitative"}
  },
  height: 0,
  selection: {
    selector166: {
      type: "interval",
      bind: "scales",
      encodings: ["x", "y"]
    }
  },
  width: 666,
  $schema: "https://vega.github.io/schema/vega-lite/v4.17.0.json",
  autosize: {type: "fit", contains: "padding"},
  padding: {bottom: 20}
};

function LineChart() {
  return <VegaLite spec={spec} data={{ values: data }} />;
}

export default LineChart;