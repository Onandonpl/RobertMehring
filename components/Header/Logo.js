import styled from "styled-components";

const Logo = () => {
  return (
    <HomeLink href="/">
      <Svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 86">
        <title>Logo</title>
        <g transform="translate(-8.000000, -2.000000)">
          <g transform="translate(11.000000, 2.000000)">
            <Path d="M 48.7105 48.6486 v -0.0236 c -0.5897 -0.6133 -1.2265 -1.2266 -1.9813 -1.8163 c 5.142 -1.6275 8.0196 -5.5429 8.0196 -11.0388 c 0 -4.9532 -2.6182 -9.1282 -6.6516 -10.6851 c -1.934 -0.7311 -4.859 -1.0849 -8.9631 -1.0849 h -15.1429 v 40.2555 h 9.7651 v -15.89 c 2.8864 0 2.7404 0.4635 3.7738 1.5804 c 1.2039 1.3158 5.2748 7.7413 9.5058 14.3096 h 11.6285 c -4.7854 -7.9782 -8.2283 -13.7113 -9.9538 -15.6069 z m -14.9542 -15.8978 c 2.0604 -0.0066 7.2574 -0.0343 8.1846 0.0944 c 1.8634 0.3302 2.8069 1.4624 2.8069 3.3966 c 0 1.6982 -0.7076 2.854 -2.0521 3.3257 c -1.5213 0.5434 -6.7963 0.3774 -8.9394 0.3774 z"></Path>
            <Polygon points="39 0 0 22 0 67 39 90 78 68 78 23"></Polygon>
          </g>
        </g>
      </Svg>
    </HomeLink>
  );
};

export default Logo;
const HomeLink = styled.a`
  width: 55px;

  height: 65px;

  display: flex;

  text-decoration: none;
  cursor: pointer;

  outline: none;

  &:focus {
    border: 1px white solid;
  }
`;

const Svg = styled.svg`
  fill: transparent;
`;

const Path = styled.path`
  fill: #f3c981;
`;

const Polygon = styled.polygon`
  stroke: #f3c981;
  stroke-width: 6;
  stroke-linecap: round;
  stroke-linejoin: round;
`;
