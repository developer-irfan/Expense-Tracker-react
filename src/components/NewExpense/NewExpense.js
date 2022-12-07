import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  function startEditingHandler() {
    setIsEditing(true);
  }

  function stopEditingHandler() {
    setIsEditing(false);
  }

  const expenseDataHandler = (expense) => {
    const NewExpense = {
      ...expense,
      id: Math.trunc(Math.random().toString()),
    };
    props.expensesDatas(NewExpense);
    stopEditingHandler();
    // console.log(NewExpense);
  };

  //return
  return (
    <div className="">
      {!isEditing && (
        <div className="mx-[100px] my-8">
          <div className="bg-gray-600 py-8 flex items-center justify-center rounded-lg">
            <button
              className="text-white bg-orange-700 px-[20px] py-4"
              onClick={startEditingHandler}
            >
              Add New Expense
            </button>
          </div>
        </div>
      )}

      {isEditing && (
        <div className="bg-gray-800  xl:mx-[280px] mt-[50px] xl:py-8 xl:px-4 rounded-2xl shadow-xl">
          <div className="content">
            <ExpenseForm
              onCancel={stopEditingHandler}
              expenseDatas={expenseDataHandler}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default NewExpense;
