import React from "react";
import ChartBar from "../ChartBar/ChartBar";
import "./Chart.css";
function Charts(props) {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  //return stat
  return (
    <div className="chart xl:mx-[50px] xl:my-[50px]">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxVal={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Charts;
