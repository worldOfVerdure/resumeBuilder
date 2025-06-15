import { PROJECTS } from "./helpers/projectData.ts";
import SingularProject from "./SingularProject.tsx";
import { styled } from "styled-components";

export default function Projects() {
  return (
    <ProjectSection >
      {PROJECTS.map(project => {
        return (
          <SingularProject key={project.title} {...project} />
        );
      })}
    </ProjectSection>
  );
}

const ProjectSection = styled.section`

`;
