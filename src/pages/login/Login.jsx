import React from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledInput,
} from "./Login.style";

const Login = () => {
  return (
    <LoginContainer>
      <FormContainer>
        <Header>Login Here</Header>
        <StyledForm>
          <StyledInput type="text" placeholder="Enter your username" />
          <StyledInput type="password" placeholder="Enter your password" />
          <StyledButton type="subit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
