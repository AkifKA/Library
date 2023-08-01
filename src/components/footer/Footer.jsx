import React, { useState, useEffect } from "react";
import { FooterBtn, FooterBtnContainer, FooterContainer } from "./Footer.style";
import { lightIcon, darkIcon } from "../../helper/iconData";

const Footer = ({ myTheme, setMyTheme }) => {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    const updateCurrentYear = () => {
      const date = new Date();
      const year = date.getFullYear();
      setCurrentYear(year);
    };
    updateCurrentYear();
  }, []);

  const handleClick = () => {
    if (myTheme === "light") {
      setMyTheme("dark");
    } else {
      setMyTheme("light");
    }
  };

  return (
    <FooterContainer>
      <span>MAK Full Stack Development {currentYear}©</span>
      <FooterBtnContainer>
        <FooterBtn onClick={handleClick} title="Switch theme">
          {myTheme === "light" ? <>{lightIcon}</> : <>{darkIcon}</>}
        </FooterBtn>
      </FooterBtnContainer>
    </FooterContainer>
  );
};

export default Footer;
