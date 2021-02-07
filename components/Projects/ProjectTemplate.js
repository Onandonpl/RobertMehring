import styled from "styled-components";
import Fade from "react-reveal/Fade";

const ProjectTemplate = ({ data }) => {
  const { title, description, technologies, githubLink, liveLink } = data;
  return (
    <Project>
      <ImageContainer url={data.images[0].fields.file.url} />

      <Info>
        <Fade right>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectDescription>
            <p>{description}</p>
          </ProjectDescription>
          <ProjectTech>
            {technologies.map((tech) => (
              <p key={Math.random()}>{tech}</p>
            ))}
          </ProjectTech>
          <ProjectLinks>
            <a href={githubLink} aria-label="GitHub Project Link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>

            <a href={liveLink} aria-label="External Project Link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </ProjectLinks>
        </Fade>
      </Info>
    </Project>
  );
};

export default ProjectTemplate;

const Project = styled.div`
  max-width: 1000px;
  width: 100%;
  height: 100%;

  display: flex;

  align-items: center;
  margin: 20px 0 0 0;

  @media (max-width: 799px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const ImageContainer = styled.div`
  position: relative;

  width: 100%;
  min-height: 350px;
  height: 100%;

  background: ${({ url }) => ` url(${url})`} no-repeat center center;
  background-size: cover;

  border-radius: 4px;
  box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
`;
const Info = styled.div`
  z-index: 3;
  min-height: 200px;
  height: 100%;
  max-width: 400px;
  width: 100%;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  transform: translateX(clamp(-100px, 5vw, -150px));

  box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
  border-radius: 5px;
  background-color: rgba(40, 71, 134, 0.4);

  @media (max-width: 799px) {
    max-width: 95%;
    transform: translateY(clamp(-100px, 5vw, -150px));
  }
`;

const ProjectTitle = styled.p`
  color: #e9f5ff;
  font-size: clamp(24px, 5vw, 28px);
`;

const ProjectDescription = styled.div`
  min-height: 85px;
  padding: 3%;
  margin: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #284786;
  box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
  border-radius: 4px;

  p {
    color: #a8b2d1;
    font-size: 15px;
  }
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  p {
    color: #a8b2d1;
    padding: 10px 10px;
  }
`;
const ProjectLinks = styled.div`
  padding-left: 10px;
  margin-top: 10px;

  display: flex;
  a {
    &:focus {
      color: #f3c981;
    }
  }

  svg {
    height: 25px;
    width: 25px;
    margin: 0 10px;

    fill: none;
    stroke: #a8b2d1;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;

    transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover {
      stroke: #f3c981;
    }
  }
`;
