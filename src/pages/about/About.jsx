import React from "react";
import {
  AboutContainer,
  IconContainer,
  InfoContainer,
  ProfileImg,
} from "./About.style";
import profile from "../../assets/avataaars.png";
import Icon from "../../components/icon/Icon";
import { iconData } from "../../helper/iconData";
import Buttons from "../../components/buttons/Buttons";

const About = () => {
  return (
    <AboutContainer>
      <ProfileImg src={profile} alt="anthony" />
      <InfoContainer>
        <h2>Hi, I'm M. Akif</h2>
        <h3>I’m currently learning Full-Stack Development Languages.</h3>
        <h4>
          I've already known JS, ReactJS, Django, SQL, Python, AWS Services.
        </h4>
        <h4>💬 You can ask me anything you want to know</h4>
      </InfoContainer>
      <IconContainer>
        {iconData.map((item) => (
          <a key={item.icon} href={item.href} target="blank">
            <Icon icon={item.icon} path={item.path} hoverColor={item.color} />
          </a>
        ))}
      </IconContainer>
      <Buttons />
    </AboutContainer>
  );
};

export default About;
