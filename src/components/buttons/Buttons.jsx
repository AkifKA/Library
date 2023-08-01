import React from "react";
import { ButtonContainer, ButtonHomeBack } from "./Buttons.styled";
import { homeIcon, backIcon } from "../../helper/iconData";
import { useNavigate } from "react-router-dom";

const Buttons = () => {
  const navigate = useNavigate();
  return (
    <ButtonContainer>
      <ButtonHomeBack onClick={() => navigate(-1)}>
        {backIcon} Back
      </ButtonHomeBack>
      <ButtonHomeBack onClick={() => navigate("/")}>
        {homeIcon} Home
      </ButtonHomeBack>
    </ButtonContainer>
  );
};

export default Buttons;
