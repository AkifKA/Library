import React from "react";
import { useNavigate } from "react-router-dom";

const Buttons = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-center">
      <button className="btn btn-primary btn-sm" onClick={() => navigate("-1")}>
        <i className="fa-solid fa-backward"></i> Back
      </button>
      <button
        className="btn btn-primary btn-sm ms-2"
        onClick={() => navigate("/")}
      >
        <i className="fa-solid fa-house"></i> Home
      </button>
    </div>
  );
};

export default Buttons;
