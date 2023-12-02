import React from "react";
import Button from "../components/Button";

const Home: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
    position: "fixed",
  };

  const innerStyle: React.CSSProperties = {
    textAlign: "center",
  };

  const imageStyle: React.CSSProperties = {
    maxWidth: "50%",
    maxHeight: "50%",
  };

  const imageText: React.CSSProperties = {
    fontSize: "25px",
  };

  const boxStyle: React.CSSProperties = {
    width: "300px",
    height: "600px",
    backgroundColor: "#336666",
    marginLeft: "-100px",
    color: "#FFF",
    padding: "20px",
    position: "relative",
  };

  // TODO: generate stylesheet
  return (
    <div style={containerStyle}>
      <div style={innerStyle}>
        <div style={imageText}>
          <p className="image-text">Here should be a photo of the chili</p>
        </div>
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
