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

  body {
    font-family: times-new-roman;
    font-size: 1.6rem;
    margin: 0;
    width: fit-content;
  }

  html {
    font-size: 62.5%;
  }
`;
