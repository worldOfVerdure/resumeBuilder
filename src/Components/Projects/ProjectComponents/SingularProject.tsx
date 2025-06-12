import ProjectGlance from "./ProjectGlance.jsx";
import { styled } from "styled-components";

export default function Project(props) {
  return (
    <ProjectContainer>
      <ProjectGlance {...props} />
    </ProjectContainer>
  );
}

const ProjectContainer = styled.ul`
  
`;
