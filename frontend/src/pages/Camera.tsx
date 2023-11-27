import React from "react";
import Button from "../components/Button";

const Camera = () => {
  return (
    <div>
      <Button
        color="secondary"
        onClick={() => console.log("Camera Button Clicked")}
      >
        Camera Button
      </Button>
    </div>
  );
};

export default Camera;
