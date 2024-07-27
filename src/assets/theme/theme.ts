import { createTheme } from "@mui/material";

// overrides and typography will eventually also be here
const theme = createTheme({
	palette: {
		primary: {
			main: "#7fdbda",
			light: "#ade498",
			dark: "#251f44",
			contrastText: "#fff",
		},
		secondary: {
			main: "#ffe0f7",
			light: "#fe91ca",
			dark: "#d3dbff",
			contrastText: "#fff",
		},
	},
	typography: {
		fontFamily: "DM Sans, sans-serif",
	},
});

export default theme;
