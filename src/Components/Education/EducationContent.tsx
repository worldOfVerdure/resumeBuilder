import { styled } from "styled-components";

export default function EducationContent() {
  return (
    <ul>
      <University>
        <NameDate>
          <p>University of Central Florida</p>
          <p>2019 - 2021</p>
        </NameDate>
        <Major>
          Earned 76 credit hours towards Bachelor in Computer Science w/ minor in mathematics | GPA: 3.5
        </Major>
      </University>
      <University >
        <NameDate>
          <p>Hillsborough Community College, FL</p>
          <p>2012 - 2014</p>
        </NameDate>
        <Major>
          Associate in Science in Mathematics | GPA: 3.8, Honors
        </Major>
      </University>
    </ul>
  );
}

const Major = styled.p`
  text-indent: 1rem;
`;

const NameDate = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  & p:first-child {
    font-weight: bold;
  }

  & p:last-child {
    font-style: italic;
  }
`;

const University = styled.li`
  &:first-child {
    margin-bottom: 1.5rem;
  }
`;
