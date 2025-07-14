import { type FC } from "react";

import ProjectInfo from "./ProjectInfo.tsx";
import { type ProjectType } from "./helpers/projectData.ts";
import { styled } from "styled-components";

const SingularProject: FC<ProjectType> = (props) => {
  const techString = props.tech?.join(", ");
  return (
    <ProjectContainer>
      <ProjectInforHeader>
        <h3>{props.title}</h3>
        |
        <p>{techString}</p>
        |
        <a href={props.githubLink} target="_blank" >GitHub</a>
      </ProjectInforHeader>
      <ProjectInfo projectTitle={props.title} />
    </ProjectContainer>
  );
}

export default SingularProject;

const ProjectContainer = styled.ul`
  margin: 0 0 1rem 0;
  padding: 0;

  &:last-child {
    margin: 0;
  }
`;

const ProjectInforHeader = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
  margin-bottom: .4rem;

  & h3, p {
    margin: 0;
  }
`;
