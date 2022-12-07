import React, { useState } from "react";

function ExpenseForm(props) {
  let [expenseData, setExpenseData] = useState({
    title: "",
    price: "",
    date: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setExpenseData({ ...expenseData, [name]: value });
  };

  //form submission handling:
  const handleFormSubmit = (e) => {
    e.preventDefault();
    expenseData = {
      title: expenseData.title,
      price: expenseData.price,
      date: new Date(expenseData.date),
    };
    console.log(expenseData);
    props.expenseDatas(expenseData);
  };

  //return here

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col space-y-4 xl:mx-[40px]"
    >
      <input
        type="text"
        placeholder="Enter Title"
        name="title"
        className="px-3 py-2"
        value={expenseData.title}
        onChange={handleInputs}
      />
      <input
        type="number"
        placeholder="Enter Amount"
        name="price"
        className="px-3 py-2"
        value={expenseData.price}
        onChange={handleInputs}
      />
      <input
        type="date"
        min="2019-01-01"
        // max="2022-12-31"
        placeholder="Enter Date"
        name="date"
        className="px-3 py-2"
        value={expenseData.date}
        onChange={handleInputs}
      />
      <button className="bg-orange-800 text-white py-3">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
