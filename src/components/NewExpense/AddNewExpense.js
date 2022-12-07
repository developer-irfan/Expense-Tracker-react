// import React, { useState } from "react";
// import NewExpense from "./NewExpense";

// function AddNewExpense() {
//   //show or hide new expense form state
//   const [expenseForm, setexpenseForm] = useState(false);

//   //
//   const showExpenseForm = () => {
//     setexpenseForm(true);
//   };

//   return (
//     <div>
//       {expenseForm ? (
//         <NewExpense />
//       ) : (
//         <div className="mx-[100px] my-8">
//           <div className="bg-gray-600 py-8 flex items-center justify-center rounded-lg">
//             <button
//               className="text-white bg-orange-700 px-[20px] py-4"
//               onClick={showExpenseForm}
//             >
//               Add New Expense
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AddNewExpense;
