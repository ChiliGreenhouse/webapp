import React from "react";
import Button from "../components/Button";

const Home = () => {
  return (
    <div>
      <Button color="success" onClick={() => console.log("It works")}>
        Home Button
      </Button>
    </div>
  );
};

export default Home;
