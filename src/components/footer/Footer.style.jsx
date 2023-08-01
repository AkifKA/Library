import styled from "styled-components";
import Flex from "../../styles/Flex";

export const FooterContainer = styled(Flex)`
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.footerColor};
`;
