import DESCRIPTION from "./helpers/descriptions/generic.ts"; //Change file name for different text.
import { type FC } from "react";
import { indexRetrieval } from "./helpers/projectHelperFunctions.ts";
import { styled } from "styled-components";

type ProjectInfoProps = {
  projectTitle: string;
};

const ProjectInfo: FC<ProjectInfoProps> = ({ projectTitle }) => {
   const projectIndex: number = indexRetrieval(projectTitle);
  
  return (
    <ProjectListContainer>
      {DESCRIPTION[projectIndex].map((listPoint, index) => {
        return <li key={`${projectTitle} li ${index}`} >{listPoint}</li>;
      })}
    </ProjectListContainer>
  );
}

export default ProjectInfo;

const ProjectListContainer = styled.ul`
  & li {
    list-style-position: inside;
    list-style-type: disc;
    text-indent: .8rem;
  }
`;
