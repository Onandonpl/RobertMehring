import styled from "styled-components";

const Title = ({ mainTitle, subTitle }) => {
  return (
    <>
      <MainTitle>{mainTitle}</MainTitle>
      <SubTitle>{subTitle}</SubTitle>
    </>
  );
};

export default Title;

const MainTitle = styled.h4`
  position: relative;
  width: 100%;
  font-size: clamp(26px, 5vw, 32px);
  text-align: center;
  color: #f3c981;
`;
const SubTitle = styled.h5`
  max-width: 400px;
  width: 100%;

  margin-top: 5px;
  text-align: center;

  color: #a5acb3;
  letter-spacing: 0.6px;
  line-height: 1.2;
`;
