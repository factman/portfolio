import React from 'react';
import theme from "./assets/theme/theme";
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import Home from "./pages/Home/Home";
import {AppStore} from "./utilities/types";
import {useSelector} from "react-redux";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Profile from "./pages/Profile/Profile";

export default function App() {
    const {mode} = useSelector((store: AppStore) => store.themeSwitch);

    return (
        <MuiThemeProvider theme={theme(mode === 'dark')}>
            <CssBaseline/>
            <BrowserRouter>
                <Switch>
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/profile'} component={Profile}/>
                    <Route path={'*'}>
                        <Redirect to={'/'}/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </MuiThemeProvider>
    );
}
