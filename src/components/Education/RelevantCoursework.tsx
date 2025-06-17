import { styled } from "styled-components";

export default function RelevantCoursework() {
  return (
    <section>
      <h3>Relevant Coursework</h3>
      <Course>
        <span>Comp Sci 1: </span>
        <li>Programming fundamentals (variables, loops, pointers, etc.)</li>
        <li>O(n<span>2</span>) sorts (bubble, insertion, selection)</li>
      </Course>
      <Course>
        <span>Comp Sci 2: </span>
      </Course>
      <Course>
        <span>Object Oriented Programming: </span>
      </Course>
      
    </section>
  );
}

const Course = styled.ul`
  margin-bottom: .4rem;

  &:last-child {
    margin-bottom: 0;
  }

  & li {
    display: inline-block;
  }

  & li > span {
    vertical-align: super;
  }

  & span {
    font-weight: bold;
  }
`
