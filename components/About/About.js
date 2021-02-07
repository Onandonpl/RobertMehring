import styled from "styled-components";
import Title from "../Title";
const About = () => {
  return (
    <AboutContainer name="about">
      <Title mainTitle={"O mnie"} />
      <AboutMe>
        <Description>
          <p>
            <span>
              Cześć, nazywam się Robert, jestem początkującym frontend
              developerem mieszkającym w trójmieście.
            </span>
            Informatyką interesuję się od dziecka. Lubię tworzyć rzeczy które
            żyją w internecie niezależnie od tego, czy są to strony internetowe,
            aplikacje, czy cokolwiek innego. Tworzenie czegoś z niczego sprawia
            mi ogromną radość dlatego moim hobby jest elektronika,
            majsterkowanie oraz stolarstwo.
          </p>
        </Description>
        <Photo>
          <img src="/02.jpg" />
        </Photo>
      </AboutMe>
    </AboutContainer>
  );
};

export default About;
const AboutContainer = styled.section`
  height: 100%;
  max-width: 1000px;
  width: 100%;
  margin-bottom: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AboutMe = styled.div`
  padding-top: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 799px) {
    flex-direction: column;
  }
`;
const Description = styled.div`
  max-width: 400px;
  color: #a8b2d1;
  padding: 10px 10px;
  p {
    display: flex;
    flex-direction: column;
    max-width: 800px;

    line-height: 1.2;
    font-size: 15px;
  }
  span {
    font-size: 21px;
    padding-bottom: 15px;
  }
  @media (max-width: 799px) {
    max-width: 100%;
  }
`;
const Photo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 250px;
    height: 40%;
    object-fit: cover;
    border-radius: 5px;
  }
`;
