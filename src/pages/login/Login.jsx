import React from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledInput,
} from "./Login.style";
import { useNavigate } from "react-router-dom";
import { toastSuccessNotify } from "../../helper/ToastNotify";

const Login = ({
  currentUser,
  setCurrentUser,
  currentPassword,
  setCurrentPassword,
}) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("currentUser", currentUser);
    sessionStorage.setItem("currentPassword", currentPassword);
    toastSuccessNotify("Logged in succesfully!");
    navigate(-1);
  };

  return (
    <LoginContainer>
      <FormContainer>
        <Header>Login Here</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            placeholder="Enter your username"
            required
            onChange={(e) => setCurrentUser(e.target.value)}
          />
          <StyledInput
            type="password"
            placeholder="Enter your password"
            required
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
