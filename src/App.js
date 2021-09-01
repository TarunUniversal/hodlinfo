import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header'
import Content from './Components/Content';
import Footer from './Components/Footer';
import styled, {ThemeProvider} from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from './Components/Theme';

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {

  const [theme, setTheme] = useState("light");

  const themeToggler = ()  => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <>
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles/>
        <StyledApp>
        <Header themeToggler={themeToggler} />
        <Content themeToggler={themeToggler} />
        <Footer/>
        </StyledApp>
    </ThemeProvider>
    </>
  );
}

export default App;
