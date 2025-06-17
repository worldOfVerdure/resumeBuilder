import { styled } from "styled-components";

export default function Header() {
  return (
    <HeaderContainer >
      <h1>Andrew Chupka</h1>
      <HeaderNav >
        <ul>
          <li><a href="mailto:contact@andrewchupka">Email</a></li>
          <li>
            <a href="https://www.andrewchupka.com/" target="_blank">Portfolio</a>
          </li>
          <li>
            <a href="https://github.com/worldOfVerdure" target="_blank">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/andrew-chupka/" target="_blank">Linkedin</a>
          </li>
        </ul>
      </HeaderNav>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  padding-top: 4rem;
  text-align: center;

  & h1 {
    margin: 0;
  }
`;

const HeaderNav = styled.nav`
  & ul {
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
    margin: 2rem auto 0;
    width: fit-content;
  }

  & li {
    flex: 0 0 auto;
    font-size: 1.7rem;
    text-indent: -.4rem;
  }
`;
