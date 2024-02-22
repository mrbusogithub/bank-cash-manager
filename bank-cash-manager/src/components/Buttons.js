import React from "react";
import { Button } from "react-bootstrap";

const Buttons = ({ text, onClick, color }) => {
  const buttonsClass = `btn btn-${color}`; // To generate the button class based on the color prop
  return (
    // To render a Bootstrap Button with the specified class and click handler
    <Button className={buttonsClass} onClick={onClick}>
      {text}
    </Button>
  );
};

export default Buttons;
