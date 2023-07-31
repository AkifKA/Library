import React, { useState } from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledInput,
} from "./Register.style";
import { useNavigate } from "react-router-dom";
import { toastSuccessNotify } from "../../helper/ToastNotify";

const Register = () => {
  const [registeredUser, setRegisteredUser] = useState("");
  const [registeredPassword, setRegisteredPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    sessionStorage.setItem("registeredUser", registeredUser);
    sessionStorage.setItem("registeredPassword", registeredPassword);
    toastSuccessNotify("Registered successfully!");
    navigate("/login");
  };

  return (
    <LoginContainer>
      <FormContainer>
        <Header>Register Here</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            placeholder="Enter your username"
            required
            onChange={(e) => setRegisteredUser(e.target.value)}
          />
          <StyledInput
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setRegisteredPassword(e.target.value)}
            required
          />
          <StyledButton type="submit">Register</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Register;
