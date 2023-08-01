import React, { useState, useEffect } from "react";
import { FooterContainer } from "./Footer.style";

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
