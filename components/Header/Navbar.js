import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Logo from "./Logo";
import Burger from "./Burger";
import Menu from "./Menu";

const Navbar = () => {
  const [visable, setVisable] = useState(1);
  const [prevScrollpos, setPrevScrollpos] = useState(0);
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visable = prevScrollpos > currentScrollPos;

    setPrevScrollpos(currentScrollPos);

    currentScrollPos === 0 ? setVisable(1) : setVisable(visable);
  };
  const handleMenu = () => setOpen((state) => !state);

  const handleResize = () => {
    const currentSize = window.innerWidth;
    currentSize < 600 ? setOpen(false) : null;
    setSize(currentSize);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return (
      () => window.removeEventListener("scroll", handleScroll),
      window.addEventListener("resize", handleResize)
    );
  });

  return (
    <Nav visable={visable}>
      <Logo />
      <Burger open={open} handleMenu={handleMenu} />
      <Menu open={open} handleMenu={size < 600 ? handleMenu : null} />
    </Nav>
  );
};

export default Navbar;

const Nav = styled.header`
  position: fixed;
  top: ${({ visable }) => (visable === false ? "-100px" : 0)};
  z-index: 19;

  max-width: 100vw;
  width: 100%;
  padding: 0 50px;
  height: ${({ visable }) => (visable === 1 ? "100px" : "80px")};

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ visable }) =>
    visable === 1 ? "rgba(28, 51, 97, 1)" : "rgba(28, 51, 97, 0.7)"};

  box-shadow: ${({ visable }) =>
    visable === 1 ? null : "0 20px 30px -30px rgba(0, 0, 0, 0.5)"};

  transition: all 0.35s cubic-bezier(0.645, 0.045, 0.355, 1);
`;
