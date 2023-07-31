import React from "react";
import { HamburgerIcon, Logo, Menu, MenuLink, Nav } from "./Navbar.style";
import { menuIcon } from "../../helper/iconData";
import { useState } from "react";

const Navbar = ({ currentUser, setCurrentUser }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    setCurrentUser("");
    sessionStorage.clear();
  };

  return (
    <Nav justify="space-between" wrap="wrap">
      <Logo to="/">MAK LIBRARY </Logo>
      <HamburgerIcon onClick={() => setShowMenu(!showMenu)}>
        {menuIcon}
      </HamburgerIcon>
      <Menu showMenu={showMenu}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/about">About</MenuLink>

        {!currentUser ? (
          <>
            <MenuLink to="/login">Login</MenuLink>
            <MenuLink to="/register">Register</MenuLink>
          </>
        ) : (
          <MenuLink to="/logout" onClick={handleLogout}>
            Logout
          </MenuLink>
        )}
      </Menu>
    </Nav>
  );
};

export default Navbar;
