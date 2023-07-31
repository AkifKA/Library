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

const Login = ({ setCurrentUser }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentUser("akifka");
    sessionStorage.setItem("user", "akifka");
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
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
