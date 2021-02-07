import styled from "styled-components";
import Fade from "react-reveal/Fade";

const SideElements = () => {
  return (
    <>
      <SideElement position={"left:40px;"} position2={"left:5px;"}>
        <Fade bottom delay={700}>
          <List>
            <li>
              <a href="https://github.com/Onandonpl" aria-label="GitHub">
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </Svg>
              </a>
            </li>
          </List>
        </Fade>
      </SideElement>
      <SideElement position={"right:40px;"} position2={"right:5px;"}>
        <Fade bottom delay={700}>
          <List>
            <li>
              <Mail href={`mailto:mehringrobert96@gmail.com`}>
                <p>mehringrobert96@gmail.com</p>
              </Mail>
            </li>
          </List>
        </Fade>
      </SideElement>
    </>
  );
};

export default SideElements;

const SideElement = styled.div`
  position: fixed;
  ${({ position }) => position};
  z-index: 10;

  width: 40px;
  bottom: 0px;

  color: white;
  @media (max-width: 1150px) {
    ${({ position2 }) => position2};
  }
  @media (max-width: 599px) {
    display: none;
  }
`;
const List = styled.ul`
  margin: 0px;
  padding: 0px;

  display: flex;
  flex-direction: column;
  align-items: center;

  list-style: outside none none;

  &::after {
    display: block;
    width: 1px;
    height: 100px;
    margin: 0px auto;

    content: "";

    background-color: #a8b2d1;
  }
`;

const Svg = styled.svg`
  width: 30px;
  height: 30px;

  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: #a8b2d1;
  margin-bottom: 15px;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    stroke: #f3c981;
  }
`;
const Mail = styled.a`
  text-decoration: none;
  color: #a8b2d1;
  p {
    letter-spacing: 1.2px;
    transform: translateY(-115px) rotate(90deg);
    transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover {
      color: #f3c981;
    }
  }
`;
