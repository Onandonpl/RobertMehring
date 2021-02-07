import styled from "styled-components";
import ProjectTemplate from "../components/Projects/ProjectTemplate";
import getPosts from "../lib/getPosts";
const projects = ({ res }) => {
  return (
    <Container>
      {res.map((post) => (
        <ProjectTemplate key={post.sys.id} data={post.fields} page={true} />
      ))}
    </Container>
  );
};

export default projects;
export const getStaticProps = async () => {
  const res = await getPosts();
  return {
    props: { res },
  };
};
const Container = styled.div`
  min-height: 100vh;
  max-width: 1100px;
  width: 100%;
  padding: 100px 0px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
