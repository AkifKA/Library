import React from "react";
import { useLocation } from "react-router-dom";
import {
  Description,
  DetailContainer,
  DetailImg,
  DetailPart,
  DetailTitle,
  SubTitle,
} from "./Detail.style";
import defaultImg from "../../assets/book.jpg";
import Buttons from "../../components/buttons/Buttons";
const Detail = () => {
  const { state } = useLocation();

  return (
    <DetailContainer>
      <DetailPart>
        <table border={2} style={{ width: "70wv" }}>
          <tbody>
            <tr>
              <td colSpan={2}>
                <DetailTitle>{state.volumeInfo.title}</DetailTitle>
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "center" }} colSpan={2}>
                <DetailImg>
                  <img
                    src={state.volumeInfo.imageLinks?.thumbnail || defaultImg}
                    alt={state.volumeInfo.title}
                  />
                </DetailImg>
              </td>
            </tr>
            <tr>
              <td style={{ verticalAlign: "top" }}>
                <SubTitle>Description</SubTitle>{" "}
              </td>
              <td>
                {" "}
                <Description>{state.volumeInfo.description}</Description>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <SubTitle>Language</SubTitle>
              </td>
              <td>
                <Description>
                  {state.volumeInfo?.language.toUpperCase()}
                </Description>
              </td>
            </tr>
            <tr>
              <td>
                <SubTitle>Authors</SubTitle>
              </td>
              <td>
                {" "}
                <Description>
                  {" "}
                  {state.volumeInfo.authors?.map((item) => (
                    <li style={{ listStyle: "none" }} key={item}>
                      {item}
                    </li>
                  ))}
                </Description>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <SubTitle>Publisher</SubTitle>{" "}
              </td>
              <td>
                {" "}
                <Description>{state.volumeInfo.publisher}</Description>
              </td>
            </tr>
            <tr>
              <td>
                <SubTitle>Publisher Date</SubTitle>{" "}
              </td>
              <td>
                <Description>{state.volumeInfo.publishedDate}</Description>
              </td>
            </tr>
            <tr>
              <td>
                <SubTitle>Amount</SubTitle>
              </td>
              <td>
                <Description>
                  {state.saleInfo?.listPrice?.amount || "No amount information"}{" "}
                  <span>{state.saleInfo.listPrice?.currencyCode}</span>
                </Description>
              </td>
            </tr>
            <tr>
              <td>
                <SubTitle>Buy Link</SubTitle>
              </td>
              <td>
                <Description>
                  {" "}
                  <a
                    href={state.saleInfo.buyLink}
                    style={{ textDecoration: "none" }}
                    target="blank"
                  >
                    Click Here to buy
                  </a>
                </Description>
              </td>
            </tr>
          </tbody>
        </table>
      </DetailPart>
      <Buttons />
    </DetailContainer>
  );
};

export default Detail;
