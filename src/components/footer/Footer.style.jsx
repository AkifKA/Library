import styled from "styled-components";
import Flex from "../../styles/Flex";

export const FooterContainer = styled(Flex)`
  margin: 1rem;
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.footerCopyColor};
`;

export const FooterBtnContainer = styled.div`
  position: relative;
`;
export const FooterBtn = styled.button`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  position: fixed;
  bottom: 0px;
  left: 1px;
`;
