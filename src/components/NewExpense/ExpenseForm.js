import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  // state
  // *** IMPORTANT ***
  // event.target.value will always return a string
  // so, we initialize all state with empty string
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // another way of managing multiple states
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  // handlers
  function titleChangeHandler(event) {
    // getting the current value from input field
    // console.log(event.target.value);
    setEnteredTitle(event.target.value);
  }

  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);

    // *** IMPORTANT ***
    // whenever we update state that depends on previous state
    // use this overload method to do so.
    // setUserInput((previous) => {
    //   return { ...previous, enteredAmount: event.target.value };
    // });
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }

  function submitHandler(event) {
    // prevent page reload
    event.preventDefault();

    const expenseDate = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    // *** IMPORTANT ***
    // pass data up to parent component (wherever the handler function comes from)
    props.onSaveExpenseData(expenseDate);

    // console.log(expenseDate);
    // re-set the fields
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }

  // jsx
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            // *** IMPORTANT ***
            // this is call two-way binding
            // we also re-set the value when the state changes
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
