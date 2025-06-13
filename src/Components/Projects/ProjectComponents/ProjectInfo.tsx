import {type FC} from "react";
import { type ProjectType } from "./helpers/projectData.ts";
import { styled } from "styled-components";

const ProjectInfo: FC<ProjectType> = ({ title, tech, githubLink }) => {
  const techString = tech?.join(", ");
  return (
    <>
      <ProjectInfoListContainer>
        <h3>{title}</h3>
        |
        <p>{techString}</p>
        |
        <a href={githubLink} target="_blank" >GitHub</a>
      </ProjectInfoListContainer>
    </>
    
  );
}

export default ProjectInfo;

const ProjectInfoListContainer = styled.ul`
  align-items: center;
  display: flex;
  gap: .5rem;
`;
