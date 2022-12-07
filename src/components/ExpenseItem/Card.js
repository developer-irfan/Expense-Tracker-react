const Card = (props) => {
  const expenseItemClasses = props.className;
  //   console.log(check);

  return <div className={expenseItemClasses}>{props.children}</div>;
};

export default Card;
