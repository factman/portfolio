import {createTheme, responsiveFontSizes, ThemeOptions} from "@material-ui/core";

const theme: ThemeOptions = responsiveFontSizes(
    createTheme({
        palette: {
            type: 'light',
            primary: {
                main: '#f05d7a',
            },
            secondary: {
                main: '#081e48',
            },
            background: {
                default: '#f1f4f9',
            },
            text: {
                primary: '#081e48',
                secondary: '#f05d7a',
                disabled: '#abb1ce',
            },
        },
        typography: {
            h1: {
                fontWeight: 700,
                fontFamily: 'Sora',
            },
            h2: {
                fontWeight: 700,
                fontFamily: 'Sora',
            },
            h3: {
                fontWeight: 700,
                fontFamily: 'Sora',
            },
            h4: {
                fontWeight: 700,
                fontFamily: 'Sora',
            },
            h5: {
                fontWeight: 700,
                fontFamily: 'Sora',
            },
            h6: {
                fontWeight: 700,
                fontFamily: 'Sora',
            },
            subtitle1: {
                fontFamily: 'Montserrat',
            },
            subtitle2: {
                fontFamily: 'Montserrat',
            },
            body1: {
                fontFamily: 'Montserrat',
            },
            body2: {
                fontFamily: 'Montserrat',
            },
            button: {
                fontFamily: 'Sora',
                fontWeight: 700,
                textTransform: 'none',
            },
            caption: {
                fontFamily: 'Montserrat',
            },
            overline: {
                fontFamily: 'Montserrat',
            },
        },
        shape: {
            borderRadius: 5,
        },
        props: {
            MuiAppBar: {
                color: 'default',
            },
            MuiTooltip: {
                arrow: true,
            },
        },
        overrides: {
            MuiButton: {
                root: {
                    boxShadow: `0px 20px 60px -25px rgba(240,93,122,0.58) !important`,
                },
            },
            MuiSwitch: {
                root: {
                    width: 42,
                    height: 26,
                    padding: 0,
                    margin: 8,
                },
                switchBase: {
                    padding: 1,
                    '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
                        transform: 'translateX(16px)',
                        color: '#fff',
                        '& + $track': {
                            opacity: 1,
                            border: 'none',
                        },
                    },
                },
                thumb: {
                    width: 24,
                    height: 24,
                },
                track: {
                    borderRadius: 13,
                    border: '1px solid #bdbdbd',
                    backgroundColor: '#fafafa',
                    opacity: 1,
                    transition:
                        'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                },
            },
        },
    }));

export default theme;
