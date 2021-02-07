import styled from "styled-components";
import Footer from "./Footer/Footer";
import Navbar from "./Header/Navbar";
import SideElements from "./SideElements";
const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Content>
        <Navbar />
        <SideElements />
        {children}
        <Footer />
      </Content>
    </Wrapper>
  );
};

export default Layout;

const Content = styled.div`
  max-width: 1920px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding: 0 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1c3361;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  background-color: #1c3361;
`;
