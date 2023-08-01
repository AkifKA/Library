import styled from "styled-components";
import Flex from "../../styles/Flex";

export const ButtonContainer = styled(Flex)`
  margin: 0.5rem;
  transition: all 1s ease-in;
`;

export const ButtonHomeBack = styled(Flex)`
  font-family: "Times New Roman", Times, serif;
  font-size: 0.7rem;
  font-weight: 700;
  border: 1px solid black;
  border-radius: 0.3rem;
  padding: 0.3rem;
  background: ${({ theme }) => theme.colors.homeBackIconBgColor};
  :hover {
    background: ${({ theme }) => theme.colors.homeBackIconHoverColor};
    color: white;
    cursor: pointer;
  }
`;
