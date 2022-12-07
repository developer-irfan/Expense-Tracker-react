import React, { useState } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpensesCharts from "./ExpensesCharts";
import ExpensesFilter from "./ExpensesFilter";

function AllExpenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let ExpenseContent = (
    <p className="text-white text-center">No Expense Found😐</p>
  );
  if (filteredExpenses.length > 0) {
    ExpenseContent = filteredExpenses.map((expense, index) => {
      return (
        <ExpenseItem
          key={index}
          title={expense.title}
          date={expense.date}
          price={expense.price}
        />
      );
    });
  }

  //return
  return (
    <div>
      <div className="bg-gray-900 mt-4 mb-4 xl:mx-[100px] rounded-lg space-y-4 py-6">
        <ExpensesCharts expenses={filteredExpenses} />
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {ExpenseContent}
      </div>
    </div>
  );
}

export default AllExpenses;
