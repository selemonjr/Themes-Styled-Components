import { createGlobalStyle } from "styled-components"
export const LightTheme = {
    body:"#fff",
    fontColor:"#000"
}
export const DarkTheme = {
    body:"#000",
    fontColor:"#fff"
}
export const GlobalStyles = createGlobalStyle`
body {
    background-color:${(props) => props.theme.body};
}
`