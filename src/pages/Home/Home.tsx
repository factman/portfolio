import React from 'react';
import HomeStyle from "./HomeStyle";
import {Box, Button, Typography} from "@material-ui/core";
import logo from "../../logo.svg";
import {useDispatch, useSelector} from "react-redux";
import {AppStore} from "../../utilities/types";
import {toggleTheme} from "../../utilities/helpers";
import Seo from "../../components/Seo/Seo";
import Link from "../../components/Link";

export default function Home() {
    const classes = HomeStyle();
    const {mode} = useSelector((store: AppStore) => store.themeSwitch);
    const dispatch = useDispatch();

    return (
        <Box component={'div'} className={classes.App}>
            <Seo title={'Home'}/>
            <Box component={'header'} className={classes.AppHeader}>
                <img src={logo} className={classes.AppLogo} alt="logo"/>
                <Typography className={classes.Text} component={'p'} variant={'body1'} align={'center'}>
                    Edit <code>src/App.tsx</code> and save to reload.
                </Typography>
                <Button
                    color={'primary'}
                    variant={'text'}
                    onClick={() => toggleTheme(dispatch, mode)}
                >
                    {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
                </Button>
                <Link href={'/profile'}>
                    <Button variant={'outlined'} color={'primary'}>
                        Profile
                    </Button>
                </Link>
            </Box>
        </Box>
    );
}
