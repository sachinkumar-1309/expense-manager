import "./ExpenseList.css"
import ExpenseItem from "./ExpenseItem";

const ExpeneList = (props) => {

    if(props.item.length === 0 ){
        return <h2 className="expense-list__fallback">No expenses yet.</h2>;
    }
    
  return (
    props.item.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  )))
  ;
};

export default ExpeneList;
