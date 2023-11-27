import React from "react";
import Button from "../components/Button";

const Data = () => {
  return (
    <div>
      <Button
        color="secondary"
        onClick={() => console.log("Regulation Button clicked")}
      >
        Data Button
      </Button>
    </div>
  );
};

export default Data;
