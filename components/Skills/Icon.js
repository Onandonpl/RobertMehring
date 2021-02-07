import styled from "styled-components";

const Icon = ({ title, link, path, color, fill, fontColor }) => {
  return (
    <IconLink href={link}>
      <Ico color={color}>
        <Svg
          fill={fill}
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>{title}</title>
          <path d={path} />
        </Svg>
        <Text fontColor={fontColor}>{title}</Text>
      </Ico>
    </IconLink>
  );
};
export default Icon;
const IconLink = styled.a`
  width: 100px;
  height: 80px;
  margin: 5px;

  display: flex;

  text-decoration: none;
  cursor: pointer;

  outline: none;

  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus {
    border: 1px white solid;
  }
  &:hover {
    transition: all 0s;
    transform: translateY(-5px);
  }
`;

const Svg = styled.svg`
  height: 2rem;
  width: 2rem;
  fill: ${({ fill }) => fill};
`;
const Ico = styled.div`
  width: 100px;
  height: 80px;
  background-color: ${({ color }) => color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  color: ${({ fontColor }) => fontColor};
  font-size: 0.75rem;
  font-weight: 400;
  text-align: center;
  margin: 5px;
`;
