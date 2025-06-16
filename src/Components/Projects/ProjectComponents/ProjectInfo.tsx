import DESCRIPTION from "./helpers/descriptions/generic.ts"; //Change file name for different text.
import { type FC } from "react";
import { indexRetrieval } from "./helpers/projectHelperFunctions.ts";
import { type ProjectType } from "./helpers/projectData.ts";
import { styled } from "styled-components";

const ProjectInfo: FC<ProjectType> = ({ title, tech, githubLink }) => {
  const projectIndex: number = indexRetrieval(title);
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
        {DESCRIPTION[projectIndex].map((listPoint, index) => {
          return <li key={`${title} li ${index}`} >{listPoint}</li>;
        })}
        
      </ProjectListContainer>
    </>
  );
}

export default ProjectInfo;

const ProjectInforHeader = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
  margin-bottom: .4rem;

  & h3, p {
    margin: 0;
  }
`;

const ProjectListContainer = styled.ul`
  & li {
    list-style-position: inside;
    list-style-type: disc;
    text-indent: .8rem;
  }
`;
