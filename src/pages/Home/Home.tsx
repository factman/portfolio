import React from 'react';
import HomeStyle from "./HomeStyle";
import {Box, Button, Typography} from "@material-ui/core";
import logo from "../../logo.svg";

export default function Home() {
    const classes = HomeStyle();

    return (
        <Box component={'div'} className={classes.App}>
            <Box component={'header'} className={classes.AppHeader}>
                <img src={logo} className={classes.AppLogo} alt="logo"/>
                <Typography className={classes.Text} component={'p'} variant={'body1'} align={'center'}>
                    Edit <code>src/App.tsx</code> and save to reload.
                </Typography>
                <Button
                    color={'primary'}
                    variant={'text'}
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </Button>
            </Box>
        </Box>
    );
}
