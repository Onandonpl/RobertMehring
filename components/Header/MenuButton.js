import styled from "styled-components";

const MenuButton = ({ open }) => {
  return <Button open={open}>CV</Button>;
};

export default MenuButton;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 0 0 10px;
  padding: 8px ${({ open }) => (open === true ? "60px" : "20px")};

  border: 2px solid
    ${({ open }) => (open === true ? "rgb(28, 51, 97)" : "#f3c981")};
  border-radius: 2px;

  cursor: pointer;

  color: ${({ open }) => (open === true ? "rgb(28, 51, 97)" : "#f3c981")};
  font-weight: 700;

  background-color: transparent;
  transition: all 0.35s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover,
  &:focus {
    scale: 1.1;
    background-color: ${({ open }) =>
      open === true ? "rgba(28, 51, 97, 0.1)" : "rgba(243, 201, 129, 0.1) "};
  }
`;
