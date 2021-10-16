import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled, {ThemeProvider} from "styled-components"
import {DarkTheme,LightTheme,GlobalStyles} from "./theme"
const App = () => {
  const [theme,SetTheme] = useState(LightTheme);
  const Cross = () => {
    theme === "light" ? SetTheme("dark") : SetTheme("light");
  }
  const StyledApp = styled.h1`
  color:${(props) => props.theme.fontColor}
  `
  return (
    <>
     <ThemeProvider theme={theme === "light" ? DarkTheme : LightTheme}>
     <GlobalStyles/>
     <StyledApp className="flex">
     <h3>Hello world</h3>
     <button type="button" onClick={Cross}>Change Theme</button>
      </StyledApp>
     </ThemeProvider>

    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
