import React from "react";
import { Logo, Menu, MenuLink, Nav } from "./Navbar.style";

const Navbar = () => {
  return (
    <Nav justify="space-between">
      <Logo to="/">MAK LIBRARY</Logo>
      <Menu>
        <MenuLink to="home">Home</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
