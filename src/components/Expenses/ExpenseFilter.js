import React from "react";

import "./ExpenseFilter.css";

export default function ExpensesFilter(props) {
  function dropdownChangeHandler(event) {
    // console.log(event.target.value);
    // again, pass data from child back to parent (Expenses in this case)
    props.onChangeFilter(event.target.value);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        {/* use two-way binding to set default value */}
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}
