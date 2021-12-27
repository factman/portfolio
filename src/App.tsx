import React from 'react';
import theme from "./assets/theme/theme";
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import Home from "./pages/Home/Home";

export default function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            <Home/>
        </MuiThemeProvider>
    );
}
