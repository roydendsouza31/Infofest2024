import React from "react";
import "../../styles/loading.css";

const Loading = () => {
  return (
    <div className="container-planet">
      <div className="spinner-box">
        <div className="blue-orbit leo"></div>
        <div className="green-orbit leo"></div>
        <div className="red-orbit leo"></div>
        <div className="white-orbit w1 leo"></div>
        <div className="white-orbit w2 leo"></div>
        <div className="white-orbit w3 leo"></div>
      </div>
    </div>
  );
};

export default Loading;
