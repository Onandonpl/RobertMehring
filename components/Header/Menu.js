import styled from "styled-components";

import Fade from "react-reveal/Fade";
import MenuButton from "./MenuButton";
import MenuLink from "./MenuLink";

const Menu = ({ open, handleMenu }) => {
  return (
    <Container open={open} onClick={handleMenu}>
      <NavList>
        <Fade top delay={400}>
          <MenuLink
            handleMenu={handleMenu}
            href={"/#skills"}
            text={"Umiejętności"}
          />
        </Fade>
        <Fade top delay={300}>
          <MenuLink
            handleMenu={handleMenu}
            href={"/#projects"}
            text={"Projekty"}
          />
        </Fade>
        <Fade top delay={200}>
          <MenuLink handleMenu={handleMenu} href={"/#about"} text={"O mnie"} />
        </Fade>
        <Fade top delay={100}>
          <MenuLink
            handleMenu={handleMenu}
            href={"/#contact"}
            text={"Kontakt"}
          />
        </Fade>
        <Fade top>
          <MenuButton open={open} />
        </Fade>
      </NavList>
    </Container>
  );
};

export default Menu;
const Container = styled.nav`
  @media (max-width: 599px) {
    position: fixed;
    top: 0px;
    bottom: 0px;
    right: 0px;
    z-index: 20;

    display: flex;
    justify-content: center;
    align-items: center;

    visibility: ${({ open }) => (open === true ? "visible" : "hidden")};

    height: 100vh;
    max-width: 100vw;
    width: 100%;

    background-color: #d3ad6d;
    clip-path: ${({ open }) =>
      open === true
        ? "circle(2000px at 90% -50%)"
        : "circle(100px at 90% -50%)"};
    transition: all 0.7s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: outside none none;

  @media (max-width: 599px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
