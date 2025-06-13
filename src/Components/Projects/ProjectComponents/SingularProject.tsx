import { type FC } from "react";
import ProjectInfo from "./ProjectInfo.tsx";
import { type ProjectType } from "./helpers/projectData.ts";
import { styled } from "styled-components";

const SingularProject: FC<ProjectType> = (props) => {
  return (
    <ProjectContainer>
      <ProjectInfo {...props} />
    </ProjectContainer>
  );
}

export default SingularProject;

const ProjectContainer = styled.ul`
  
`;
