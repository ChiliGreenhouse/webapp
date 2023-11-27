import React from "react";
import Button from "../components/Button";

const Regulation = () => {
  return (
    <div>
      <Button
        color="danger"
        onClick={() => console.log("Regulation Button clicked")}
      >
        Regulation Button
      </Button>
    </div>
  );
};

export default Regulation;
