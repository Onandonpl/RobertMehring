import styled from "styled-components";
import Title from "../Title";
import Technologies from "./Technologies";
const Skills = () => {
  return (
    <SkillsContainer name="skills">
      <Title
        mainTitle={"Umiejętności"}
        subTitle={"Technologie w których miałem okazję tworzyć."}
      />

      <Technologies />
    </SkillsContainer>
  );
};

export default Skills;

const SkillsContainer = styled.section`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

