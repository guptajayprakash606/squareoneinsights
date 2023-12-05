import React from "react";

const Buttons = (props) => {
  return (
    <>
      <button className={props.classname} onClick={props.onClick}>
        {props.name}
      </button>
    </>
  );
};

export default Buttons;
