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

const Login = ({ setCurrentUser }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentUser("akifka");
    sessionStorage.setItem("user", "akifka");
    toastSuccessNotify("Logged in succesfully!");
    navigate(-1);
  };

  return (
    <LoginContainer>
      <FormContainer>
        <Header>Login Here</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput type="text" placeholder="Enter your username" required />
          <StyledInput
            type="password"
            placeholder="Enter your password"
            required
          />
          <p
            style={{ fontSize: "12px", textAlign: "center", marginTop: "5px" }}
          >
            (Type anything to login for now...)
          </p>
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
