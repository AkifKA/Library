import React from "react";
import { FormContainer, Header, LoginContainer } from "./Login.style";

const Login = () => {
  return (
    <LoginContainer>
      <FormContainer>
        <Header>Login Here</Header>
        <StyledForm>
          <StyledInput type="text" placeholder="Enter your username" />
          <StyledInput type="password" placeholder="Enter your password" />
          <StyledButton type="subit" />
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
