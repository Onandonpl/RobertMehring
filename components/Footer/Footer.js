import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <a href="https://github.com/Onandonpl">
        Stworzone i zaprojektowane przez Onandon. Strona powstała z myślą o
        przetestowaniu NextJS, Netlify oraz Contentfull. Moim portfolio jest
        Github.
      </a>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  margin: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  a {
    font-size: 12px;
    color: #ccd6f6;
    text-decoration: none;
    transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover {
      color: #f3c981;
    }
  }
`;
