import DESCRIPTION from "./helpers/descriptions/generic.ts"; //Change file name for different text.
import { type FC } from "react";
import { type ProjectType } from "./helpers/projectData.ts";
import { styled } from "styled-components";

const ProjectInfo: FC<ProjectType> = ({ title, tech, githubLink }) => {
  const techString = tech?.join(", ");
  return (
    <>
      <ProjectInforHeader>
        <h3>{title}</h3>
        |
        <p>{techString}</p>
        |
        <a href={githubLink} target="_blank" >GitHub</a>
      </ProjectInforHeader>
      <ProjectListContainer>
        {/* map() DESCRIPTION. Will need some logic to select the correct, inner array. I can use
        the title and get return the correct index. Use a simple switch statement in this file. */}
      </ProjectListContainer>
    </>
    
  );
}

export default ProjectInfo;

const ProjectInforHeader = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;

  & h3, p {
    margin: 0;
  }
`;

const ProjectListContainer = styled.ul`
  margin: 0;
  padding: 0;
`;
