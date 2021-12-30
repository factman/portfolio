import React from 'react';
import theme from "./assets/theme/theme";
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import Home from "./pages/Home/Home";
import {AppStore} from "./utilities/types";
import {useSelector} from "react-redux";

export default function App() {
    const {mode} = useSelector((store: AppStore) => store.themeSwitch);

    return (
        <MuiThemeProvider theme={theme(mode)}>
            <CssBaseline/>
            <Home/>
        </MuiThemeProvider>
    );
}
