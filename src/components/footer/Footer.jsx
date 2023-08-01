import React, { useState, useEffect } from "react";
import { ButtonsContainer, FooterContainer } from "./Footer.style";
import Buttons from "./Buttons";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    const updateCurrentYear = () => {
      const date = new Date();
      const year = date.getFullYear();
      setCurrentYear(year);
    };
    updateCurrentYear();
  }, []);

  return (
    <FooterContainer>
      <p>MAK Full Stack Development {currentYear}©</p>
    </FooterContainer>
  );
};

export default Footer;
