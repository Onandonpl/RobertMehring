import styled from "styled-components";
import ProjectTemplate from "./ProjectTemplate";
import LinkButton from "../LinkButton";
import Title from "../Title";

const Projects = ({ posts }) => {
  return (
    <ProjectsContainer name="projects">
      <Title
        mainTitle={"Moje projekty"}
        subTitle={"Projekty które tworzyłem podczas nauki."}
      />
      {posts.slice(0, 2).map((post) => (
        <ProjectTemplate key={post.sys.id} data={post.fields} />
      ))}

      <LinkButton href={"/projects"} text={"Sprawdź więcej"} />
    </ProjectsContainer>
  );
};

export default Projects;

const ProjectsContainer = styled.section`
  height: 100%;
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;
