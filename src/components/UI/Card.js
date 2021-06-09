import React from "react";
import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className; //空格一定要加
  return <div className={classes}>{props.children}</div>;
};

export default Card;
