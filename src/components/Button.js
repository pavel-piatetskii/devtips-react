import React from "react";
import classnames from "classnames";

import "./Button.scss";

export default function Button(props) {

  const buttonClass = classnames("button", {
    "button--submit": props.submit,
    "button--danger": props.danger
  });

  return (
    <button
      className={buttonClass}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};