import { PROJECTS } from "./helpers/projectData.ts";
import SingularProject from "./SingularProject.tsx";
import { styled } from "styled-components";

export default function Projects() {
  return (
    <ProjectSection >
      <ul>
        {PROJECTS.map(project => {
          return (
            <SingularProject key={project.title} {...project} />
          );
        })}
      </ul>
    </ProjectSection>
  );
}

const ProjectSection = styled.section`
  & h3 {
    margin: 1.8rem 0 0 0;
  }

  & ul {
    margin: 0;
    padding: 0;
  }
`;
