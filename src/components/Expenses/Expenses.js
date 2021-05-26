import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpneseFitler from "./ExpenseFilter";

export default function Expenses(props) {
  // state
  const [filteredYeaer, setFilteredYear] = useState("2020");

  // handlers
  function filterChangeHandler(selectedYear) {
    // console.log("filterChangeHandler");
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  }

  return (
    <Card className="expenses">
      <ExpneseFitler
        // again two-way binding to set the year
        selected={filteredYeaer}
        onChangeFilter={filterChangeHandler}
      />

      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}
