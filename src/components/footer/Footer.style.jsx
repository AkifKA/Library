import styled from "styled-components";
import Flex from "../../styles/Flex";

export const FooterContainer = styled.div`
  position: relative;
  margin: 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.footerColor};
`;

export const FooterBtn = styled.button`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  position: fixed;
  bottom: 0px;
`;
