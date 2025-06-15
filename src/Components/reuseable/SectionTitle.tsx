import { type FC } from "react";
import { styled } from "styled-components";

type SectionTitleProps = {
  sectionTitle: string;
};

const SectionTitle: FC<SectionTitleProps> = ({ sectionTitle }) => {
  return (
    <TitleContainer>
      <h2>{sectionTitle}</h2>
      <hr />
    </TitleContainer>
  );
}

export default SectionTitle;

const TitleContainer = styled.div`
  & h2 {
    margin: 1.6rem 0 0 0;
  }

  & hr {
    background-color: #000;
    border: 0;
    height: .1rem;
    margin: .4rem 0;
  }
`;
