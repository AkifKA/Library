import styled from "styled-components";
import Flex from "../../styles/Flex";

export const LoginContainer = styled(Flex)`
  height: 90vh;
  background-image: url("https://picsum.photos/1600/900");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const FormContainer = styled(Flex)`
  width: 40rem;
  height: 40rem;
  max-width: 50rem;
  padding: 0.5rem;
  flex-direction: column;
`;
export const Header = styled.h1`
  font-size: 2rem;
  text-align: center;
  width: 100%;
  -webkit-text-fill-color: transparent;
  color: transparent;
  transform: translate(0.1em, 0.1em);
  background-image: linear-gradient(305deg, darkblue, yellow, darkblue);
  -webkit-background-clip: text;
`;
