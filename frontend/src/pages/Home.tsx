import React from "react";
import Button from "../components/Button";

const Home: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center", // Change this to 'center'
    height: "90vh",
  };

  const innerStyle: React.CSSProperties = {
    textAlign: "center",
  };

  const imageStyle: React.CSSProperties = {
    maxWidth: "50%",
    maxHeight: "50%",
  };

  const boxStyle: React.CSSProperties = {
    width: "400px",
    height: "600px",
    backgroundColor: "#336666",
    marginLeft: "20px",
    color: "#FFF",
    padding: "20px",
  };

  // TODO: generate stylesheet
  return (
    <div style={containerStyle}>
      <div style={innerStyle}>
        <img src="../../assets/chili.jpg" alt="Chili" style={imageStyle} />
      </div>
      <div style={boxStyle}>
        <h2> Basic Data</h2>
        {/* TODO: implement list component */} waiting for list component to be
        implemented
      </div>
    </div>
  );
};

export default Home;
