const ExpensesFilter = (props) => {
  // console.log(props);
  function dropDownChangeHandler(event) {
    props.onChangeFilter(event.target.value);
  }

  return (
    <div className="expenses-filter">
      <div className="flex justify-between items-center xl:pb-[10px] px-[110px]">
        <label className="text-white text-[18px] font-semibold tracking-wider">
          Filter by year
        </label>
        <select
          value={props.selected}
          onChange={dropDownChangeHandler}
          className="px-[40px] py-[6px] text-[18px] font-semibold"
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
