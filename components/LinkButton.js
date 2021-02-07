import Link from "next/link";
import styled from "styled-components";

const LinkButton = ({ href, text }) => {
  return (
    <Container>
      <Link href={href}>{text}</Link>
    </Container>
  );
};

export default LinkButton;
const Container = styled.div`
  max-width: 200px;
  padding: 8px 20px;
  margin-top: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid #f3c981;
  border-radius: 2px;
  transition: all 0.35s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover,
  &:focus {
    scale: 1.1;
    background-color: rgba(243, 201, 129, 0.1);
  }
  a {
    color: #f3c981;
    font-weight: 700;
    font-size: 15px;
    text-decoration: none;
  }
`;
