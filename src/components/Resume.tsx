import Education from "./Education/Education.tsx";
import Header from "./Header/Header.tsx";
import Projects from "./Projects/Projects.tsx";
import Skills from "./Skills/Skills.tsx";
import { styled } from "styled-components";

export default function Resume() {
  return (
    <ResumePage >
      <PageContainer>
        <Header />
        <Projects />
        <Skills />
        <Education />
      </PageContainer>
    </ResumePage>
  );
}

const ResumePage = styled.div`
  height: 11in;
  margin: 0 auto;
  width: 8.5in;

  & h1 {
    margin: 0;
  }
`;

const PageContainer = styled.div`
  margin: 0 auto;
  width: 90%;
`;
