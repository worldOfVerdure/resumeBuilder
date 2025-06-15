import { styled } from "styled-components";

export default function SkillsContent() {
  return (
    <SkillContentContainer>
      <p><span>Languages:</span>C, Java, JavaScript, TypeScript</p>
      <p><span>Web Technologies:</span>HTML, CSS, ReactJS, Styled-Components</p>
      <p><span>Version Control:</span>Git</p>
    </SkillContentContainer>
  );
}

const SkillContentContainer = styled.div``;
