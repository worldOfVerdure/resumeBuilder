// import Project from "./Project.jsx";
// import PROJECTS from "./helpers/projectData.js";
import { styled } from "styled-components";

export default function Projects() {
  return (
    <ProjectSection >
      <ul>
        {PROJECTS.map(project => {
          return <Project project={project} key={project.title} />
        })}
      </ul>
    </ProjectSection>
  );
}

const ProjectSection = styled.section`
  & h3 {
    margin: 1.8rem 0 0 0;
  }

`;
