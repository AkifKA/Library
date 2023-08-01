import styled from "styled-components";
import Flex from "../../styles/Flex";

export const ButtonContainer = styled(Flex)`
  gap: 0.3rem;
  margin: 0.5rem;
`;

export const ButtonHomeBack = styled(Flex)`
  gap: 0.3rem;
  font-family: "Times New Roman", Times, serif;
  font-size: 0.85rem;
  font-weight: 700;

  border: 1px solid black;
  border-radius: 0.3rem;
  padding: 0.4rem;
  background: ${({ theme }) => theme.colors.homeBackIconBgColor};
  :hover {
    background: ${({ theme }) => theme.colors.homeBackIconHoverColor};
    color: white;
    cursor: pointer;
  }
`;
