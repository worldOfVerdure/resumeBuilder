import { styled } from "styled-components";

export default function SkillsContent() {
  return (
    <SkillContentContainer>
      <div>
        <span>Languages: </span>
        <ul>
          <li>C</li>
          <li>Java</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
        </ul>
      </div>
      <div>
        <span>Web Technologies: </span>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>ReactJS/TS</li>
          <li>Styled-Components</li>
          <li>Vite</li>
          <li>Node.js</li>
          <li>NPM</li>
        </ul>
      </div>
      <div><span>Version Control: </span>Git</div>
      <nav>
        <span>Coding Profile(s): </span>
        <a href="https://codepen.io/worldOfVerdure" target="_blank" >CodePen</a>
      </nav>
    </SkillContentContainer>
  );
}

const SkillContentContainer = styled.div`
  & div {
    margin-bottom: .6rem;
  }

  & div, ul {
    align-items: center;
    display: flex;
    gap: .4rem;
  }

  & li::after {
    content: ", ";
  }

  & li:last-child::after {
    content: "";
  }

  & span {
    font-weight: bold;
  }
`;
