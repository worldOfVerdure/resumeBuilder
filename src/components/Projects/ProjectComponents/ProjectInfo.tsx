import DESCRIPTION from "./helpers/descriptions/generic.ts"; //Change file name for different text.
import { type FC } from "react";
import { type ProjectTitle } from "./helpers/projectData.ts";
import { styled } from "styled-components";

type ProjectInfoProps = {
  projectTitle: ProjectTitle;
};

const ProjectInfo: FC<ProjectInfoProps> = ({ projectTitle }) => {
  return (
    <ProjectListContainer>
      {DESCRIPTION[projectTitle].map((listPoint, index) => {
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
