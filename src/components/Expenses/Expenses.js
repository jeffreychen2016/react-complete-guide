import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpneseFitler from "./ExpenseFilter";
import ExpenseList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
  // state
  const [filteredYear, setFilteredYear] = useState("2020");

  // handlers
  function filterChangeHandler(selectedYear) {
    // console.log("filterChangeHandler");
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpneseFitler
        // again two-way binding to set the year
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      {/* conditionally render the content */}
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
}
