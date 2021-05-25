import React from "react";
import "./Card.css";

// this is a wrapper component
// which standardize some styles in this case
// *** IMPORTANT ***
// props.children is created by REACT, all props have .children by default
// the value is referring to the content that this Card component is wrapping inside
export default function Card(props) {
  // add existing class names
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
}
