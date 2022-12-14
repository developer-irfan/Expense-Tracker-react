import React from "react";
import Charts from "../Charts/Charts/Charts";

function ExpensesCharts(props) {
  console.log(props.expenses);
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    // console.log(expenseMonth);
    chartDataPoints[expenseMonth].value += expense.price;
  }
  return <Charts dataPoints={chartDataPoints} />;
}

export default ExpensesCharts;
