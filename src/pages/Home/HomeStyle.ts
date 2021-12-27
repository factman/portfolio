import {makeStyles, Theme} from "@material-ui/core";

export default makeStyles((theme: Theme) => ({
    App: {
        textAlign: 'center',
    },
    AppLogo: {
        height: '40vmin',
    },
    AppHeader: {
        backgroundColor: theme.palette.background.default,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Text: {
        marginBottom: theme.spacing(2),
    },
    '@keyframes AppLogoSpin': {
        from: {
            transform: 'rotate(0deg)',
        },
        to: {
            transform: 'rotate(360deg)',
        },
    },
    '@media (prefers-reduced-motion: no-preference)': {
        AppLogo: {
            animation: `$AppLogoSpin infinite 20s linear`,
        },
    },
}));
