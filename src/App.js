import { useEffect, useState } from "react";
import "./App.css";
import AllExpenses from "./components/AllExpenses/AllExpenses";
import NewExpense from "./components/NewExpense/NewExpense";

//inital expenses
const IntialExpenses = [
  { date: new Date(2021, 2, 6), title: "Inusrance 1", price: "234.2" },
  { date: new Date(2020, 7, 9), title: "Inusrance 2", price: "87.98" },
  { date: new Date(2021, 2, 12), title: "Inusrance 3", price: "121.2" },
  { date: new Date(2021, 2, 1), title: "Inusrance 4", price: "333.9" },
];

const App = () => {
  //storing inital expenses
  const [expenses, setExpenses] = useState(IntialExpenses);
  const expenseDatas = (expense) => {
    setExpenses((AllIntialExpenses) => {
      return [expense, ...AllIntialExpenses];
    });
  };

  //return here
  return (
    <div>
      <NewExpense expensesDatas={expenseDatas} />
      <AllExpenses items={expenses} />
    </div>
  );
};

export default App;
