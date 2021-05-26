import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
  function saveExpenseDataHandler(enteredExpenseDate) {
    const expenseData = {
      ...enteredExpenseDate,
      id: Math.random().toString(),
    };

    // pass the data back to parent component (App in this case)
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  }

  return (
    <div className="new-expense">
      {/* *** IMPORTANT *** */}
      {/* pass data from ExpenseFrom (child component) back to NewExpense (parent component) */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
