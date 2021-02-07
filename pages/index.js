import styled from "styled-components";
import Hero from "../components/Hero/Hero";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import getPosts from "../lib/getPosts";

const index = ({ res }) => {
  return (
    <Home>
      <Hero />
      <Skills />
      <Projects posts={res} />
      <About />
      <Contact />
    </Home>
  );
};

export default index;

export const getStaticProps = async () => {
  const res = await getPosts();
  return {
    props: { res },
  };
};

const Home = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
