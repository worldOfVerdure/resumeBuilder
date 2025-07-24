import { styled } from "styled-components";

export default function Header() {
  return (
    <HeaderContainer >
      <h1>Andrew Chupka</h1>
      <HeaderNav >
        <ul>
          <li>
            <Link href="mailto:contact@andrewchupka" rel="noopener noreferrer" target="_blank" >Email</Link>
            <Text >Email: contact@andrewchupka.com</Text>
          </li>
          <li>
            <Link href="https://www.andrewchupka.com" rel="noopener noreferrer" target="_blank" >Portfolio</Link>
            <Text >Portfolio: https://www.andrewchupka.com</Text>
          </li>
          <li>
            <Link href="https://github.com/worldOfVerdure" rel="noopener noreferrer" target="_blank" >GitHub</Link>
            <Text >GitHub: https://github.com/worldOfVerdure</Text>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/andrew-chupka/" rel="noopener noreferrer" target="_blank" >Linkedin</Link>
            <Text >Linkedin: contact@andrewchupka.com</Text>
          </li>
        </ul>
      </HeaderNav>
    </HeaderContainer>
  );
}

const Link = styled.a`
  @media print {
    display: none;
  }
`;

const Text = styled.span`
  display: none;

  @media print {
    display: inline;
  }
`;

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

    @media print {
      display: grid;
      column-gap: 4rem;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      height: fit-content;
      row-gap: 1rem;
    }
  }

  & li {
    flex: 0 0 auto;
    font-size: 1.7rem;
    text-indent: -.4rem;

    @media print {
      display: flex;
      justify-content: start;
    }
  }
`;
