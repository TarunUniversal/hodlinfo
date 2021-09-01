import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#0c0f48",
  bg: "#f8f9fa"

};

export const darkTheme = {
  body: "#191d28",
  fontColor: "#fff",
  bg: "#2e3241"
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
`;