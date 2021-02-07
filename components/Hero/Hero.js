import Fade from "react-reveal/Fade";
import styled from "styled-components";
import LinkButton from "../LinkButton";
const Hero = () => {
  return (
    <Section>
      <Fade bottom delay={450}>
        <H2>Cześć, nazywam się</H2>
      </Fade>
      <Fade bottom delay={500}>
        <H1>Robert Mehring.</H1>
      </Fade>
      <Fade bottom delay={550}>
        <H3>Tworzę rzeczy dla internetu.</H3>
      </Fade>
      <Fade bottom delay={600}>
        <Text>
          Poprzez poznawanie najnowszych rozwiązań i technologii dążę do
          poszerzania swoich kompetencji a także doskonalenia nabytych już
          umiejętności.
        </Text>
      </Fade>
      <Fade bottom delay={650}>
        <LinkButton
          text={"Skontaktuj się"}
          href={"mailto:mehringrobert96@gmail.com"}
        ></LinkButton>
      </Fade>
    </Section>
  );
};

export default Hero;
const Section = styled.section`
  min-height: 100vh;
  max-width: 1100px;
  width: 100%;
  padding: 100px 0px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const H2 = styled.h2`
  margin-bottom: 20px;

  color: #f3c981;
  font-size: 16px;
  letter-spacing: 0.9px;
`;
const H1 = styled.h1`
  margin-bottom: 5px;

  color: #d1dce5;
  font-size: clamp(50px, 9vw, 80px);
`;
const H3 = styled.h3`
  color: #a5acb3;
  font-size: clamp(35px, 6vw, 60px);
`;

const Text = styled.p`
  max-width: 500px;
  margin-top: 15px;

  color: #a5acb3;
  letter-spacing: 0.6px;
  line-height: 1.2;
`;
