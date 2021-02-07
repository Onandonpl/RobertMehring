import styled from "styled-components";
import Link from "next/link";

const MenuLink = ({ handleMenu, href, text }) => {
  return (
    <NavLink>
      <Link href={href} onClick={handleMenu} smooth={true} duration={500}>
        {text}
      </Link>
    </NavLink>
  );
};

export default MenuLink;
const NavLink = styled.li`
  margin: 0 10px;
  @media (max-width: 599px) {
    margin: 20px 10px;
  }
  a {
    cursor: pointer;

    font-size: 0.9rem;
    letter-spacing: 0.8px;
    color: #d1dce5;
    text-decoration: none;
    transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover,
    &:focus {
      color: #f3c981;
    }
    @media (max-width: 599px) {
      font-size: 2.1rem;
      letter-spacing: 0.7px;
      color: #1c3361;

      &:hover,
      &:focus {
        color: #3b62b1;
      }
    }
  }
`;
