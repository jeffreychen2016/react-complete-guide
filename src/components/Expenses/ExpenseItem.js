import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

export default function ExpenseItem(props) {
  // state
  // title: is same of the props.title when first render
  // setTitle: function that is used to update the state
  // here, set the initial state to whatever gets passed into the component
  // const [title, setTitle] = useState(props.title);

  // handlers
  // function clickHandler() {
  //   setTitle("updated!");
  // }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        {/* <h2>{title}</h2> */}
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>change title</button> */}
    </Card>
  );
}
