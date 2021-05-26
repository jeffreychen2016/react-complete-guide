import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  // handlers
  // this handler is used to get data from child component
  function saveExpenseDataHandler(enteredExpenseDate) {
    const expenseData = {
      ...enteredExpenseDate,
      id: Math.random().toString(),
    };

    // pass the data back to parent component (App in this case)
    // console.log(expenseData);
    props.onAddExpense(expenseData);

    // close form
    setIsEditing(false);
  }

  // this handler is used to get data from child component
  function stopEditingHandler() {
    setIsEditing(false);
  }

  function startEditingHandler() {
    setIsEditing(true);
  }

  return (
    <div className="new-expense">
      {/* conditional redering */}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {/* *** IMPORTANT *** */}
      {/* pass data from ExpenseFrom (child component) back to NewExpense (parent component) */}
      {isEditing && (
        <ExpenseForm
          onCancel={stopEditingHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
}
