import React from "react";
import { render } from "react-dom";
import "./index.css";
import { ThemeProvider } from "styled-components";
import { Theme } from "./interfaces";

import App from "./App";

const theme: Theme = {
	colors: {
		primary: "hsl(240, 38%, 20%)",
		secondary: "hsl(240, 18%, 77%)",
	},
	size: "32px",
	weight: {
		sm: "300",
		md: "500",
		lg: "700",
	},
};

render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>,
	document.querySelector("#root")
);
