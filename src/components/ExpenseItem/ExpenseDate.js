const ExpenseDate = (props) => {
  //date
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div>
      <div className="flex flex-col items-center border-2 border-white bg-gray-900 rounded-[15px] px-7 py-3">
        <h2 className="text-[18px] font-semibold">{month.slice(0, 3)}</h2>
        <h2 className="text-[14px]">{year}</h2>
        <h2 className="text-[20px] font-semibold">{day}</h2>
      </div>
    </div>
  );
};

export default ExpenseDate;
