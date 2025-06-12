import { styled } from "styled-components";

export default function ProjectInfo({ title, tech, github }) {
  const techString = tech.join(", ");
  return (
    <ProjectInfoListContainer>
      <h3>{title}</h3>
      |
      <p>{techString}</p>
      |
      <a href={github} target="_blank" >GitHub</a>
    </ProjectInfoListContainer>
  );
}

const ProjectInfoListContainer = styled.ul`
  align-items: center;
  display: flex;
  gap: .5rem;
`;
