import { createGlobalStyle } from "styled-components";
import Resume from "./components/Resume.tsx";

function App() {
  return (
    <>
      <GlobalStyles />
      <Resume />
    </>
  )
}

export default App;

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  a {
    color: #000;
  }

  body, p, ul {
    margin: 0;
  }

  body {
    font-family: times-new-roman;
    font-size: 1.6rem;
    width: fit-content;
  }

  h3 {
    margin: 1rem 0 .4rem 0;
  }

  html {
    font-size: 62.5%;
  }

  li {
    list-style-type: none;
  }

  ul {
    padding: 0;
  }
`;
