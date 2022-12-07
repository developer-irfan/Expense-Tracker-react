import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

const ExpenseItem = (props) => {
  //state
  //return statement
  return (
    <Card className="bg-gray-700 flex text-white justify-between rounded-lg px-4 text-[20px] py-4 items-center xl:mx-[100px] xl:px-[70px]">
      <div className="flex items-center text-[18px] space-x-4 xl:space-x-[60px]">
        <ExpenseDate date={props.date} />
        <h2 className="font-semibold tracking-wider text-[22px]">
          {props.title}
        </h2>
      </div>
      <button className="bg-orange-800 rounded-md px-4 py-2 border-2 border-gray-100">
        ${props.price}
      </button>
    </Card>
  );
};

export default ExpenseItem;
