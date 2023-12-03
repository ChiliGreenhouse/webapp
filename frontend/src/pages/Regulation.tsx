import React from "react";
import Button from "../components/Button";
import MultiRangeSlider from "../components/MultirangeSSlider/Slider";

const Regulation = () => {
  return (
    <div>
      <MultiRangeSlider min = {0} max = {100}/>
    </div>
  );
};

export default Regulation;
