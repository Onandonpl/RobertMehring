import styled from "styled-components";

const Burger = ({ handleMenu, open }) => {
  return (
    <Button
      onClick={handleMenu}
      type="button"
      aria-expanded={!open ? "false" : "true"}
      aria-label="Toggle navigation"
    >
      <Svg viewBox="0 0 100 100">
        <Path
          open={open}
          d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
        />
        <Path1 open={open} d="M 20,50 H 80" />
        <Path
          open={open}
          d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
        />
      </Svg>
    </Button>
  );
};

export default Burger;

const Button = styled.button`
  z-index: 21;
  width: 80px;

  height: 80px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border: none;
  outline: none;

  &:focus {
    border: 1px white solid;
  }

  @media (min-width: 600px) {
    display: none;
  }
`;
const Svg = styled.svg`
  width: 100;
  height: 100;
`;

const Path = styled.path`
  fill: none;
  stroke: ${({ open }) => (!open ? "#f3c981" : "#000000")};
  stroke-width: 6;
  transition: stroke-dasharray 600ms cubic-bezier(0.645, 0.045, 0.355, 1),
    stroke-dashoffset 600ms cubic-bezier(0.645, 0.045, 0.355, 1);
  stroke-dasharray: ${({ open }) => (!open ? "60 207" : "90 207")};
  stroke-dashoffset: ${({ open }) => (!open ? null : -134)};
`;

const Path1 = styled.path`
  fill: none;
  stroke: ${({ open }) => (!open ? "#f3c981" : "#000000")};
  stroke-width: 6;
  transition: stroke-dasharray 600ms cubic-bezier(0.645, 0.045, 0.355, 1),
    stroke-dashoffset 600ms cubic-bezier(0.645, 0.045, 0.355, 1);
  stroke-dasharray: ${({ open }) => (!open ? "60 60" : "1 60")};
  stroke-dashoffset: ${({ open }) => (!open ? null : -30)};
`;
