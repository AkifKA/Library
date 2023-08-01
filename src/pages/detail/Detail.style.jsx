import styled from "styled-components";
import Flex from "../../styles/Flex";

export const DetailContainer = styled(Flex)`
  flex-direction: column;


  padding: 1rem;
  h2{
    color: ${({ theme }) => theme.colors.detailColor}}
  }

`;

export const DetailPart = styled(Flex)`
  flex-direction: column;
  margin: 1rem;
  border: 1px solid white;
  border-radius: 5px;
  min-width: 25vw;
  background-color: ${({ theme }) => theme.colors.detailBgColor};
  color: ${({ theme }) => theme.colors.detailColor};
`;

export const DetailTitle = styled.h3`
  margin: 25px;
  text-align: center;
  color: ${({ theme }) => theme.colors.detailColor};
`;

export const DetailImg = styled.div`
  margin: 2rem;

  img {
    border-radius: 1rem;
    max-width: 300px;
    max-height: 300px;
   
  }
  }
`;

export const Description = styled.div`
  min-width: 40%;
  text-align: justify;
  font-size: 1rem;
  padding: 0.5rem;
`;
export const SubTitle = styled.div`
  text-align: left;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.5rem;
`;
