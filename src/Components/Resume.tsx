import Projects from "./Projects/Projects.tsx";
import Header from "./Header/Header.tsx";
import Skills from "./Skills/Skills.tsx";
import { styled } from "styled-components";

export default function Resume() {
  return (
    <ResumePage >
      <SectionContainer>
        <Header />
        <Projects />
        <Skills />
      </SectionContainer>
    </ResumePage>
  );
}

const ResumePage = styled.div`
  border: .2rem solid #000;
  height: 11in;
  margin: 0 auto;
  width: 8.5in;

  & h1 {
    margin: 0;
  }
`;

const SectionContainer = styled.div`
  margin: 0 auto;
  width: 90%;
`;
