import {createTheme, responsiveFontSizes, ThemeOptions} from "@material-ui/core";

const theme = (dark: boolean): ThemeOptions => responsiveFontSizes(
    createTheme({
        palette: {
            type: dark ? "dark" : "light",
            primary: {
                main: "#FCA929",
                contrastText: "#ffffff"
            },
            secondary: {
                main: "#FAC4C4"
            },
            text: {
                primary: dark ? "#D46A6A" : "#2E140A",
                secondary: dark ? "#FAC4C4" : "#A58980"
            },
            background: {
                default: dark ? '#0F0703' : '#F9F3F1',
                paper: dark ? '#513B33' : '#fff',
            },
            info: {
                main: "#D46A6A"
            },
            colors: {
                primary: "#FCA929",
                secondary: dark ? "#D46A6A" : "#FAC4C4",
                backgroundDark: "#2E140A",
                backgroundLight: "#F9F3F1",
                secondaryDark: dark ? "#FAC4C4" : "#D46A6A",
                gray: "#C4C4C4",
                white: "#FFFFFF"
            },
        },
        typography: {
            fontFamily: "Montserrat, Arial, Roboto, sans-serif",
            fontWeightLight: 500,
            fontWeightRegular: 500,
            fontWeightMedium: 600,
            fontWeightBold: 700,
            fontSize: 14,
            h1: {
                fontSize: 48,
                fontWeight: 700
            },
            h2: {
                fontSize: 36,
                fontWeight: 700
            },
            h3: {
                fontSize: 24,
                fontWeight: 700
            },
            h4: {
                fontSize: 24,
                fontWeight: 700
            },
            h5: {
                fontSize: 20,
                fontWeight: 700
            },
            h6: {
                fontSize: 20,
                fontWeight: 700
            },
            body1: {
                fontSize: 14,
                fontWeight: 500
            },
            body2: {
                fontSize: 15,
                fontWeight: 500
            },
            button: {
                fontSize: 14,
                fontWeight: 500
            }
        },
        props: {
            MuiTooltip: {
                arrow: true
            }
        },
        overrides: {
            MuiDivider: {
                root: {
                    backgroundColor: `${dark ? "#FAC4C4" : "#A58980"}`,
                    marginTop: "32px",
                    marginBottom: "32px"
                }
            },
            MuiFab: {
                root: {
                    boxShadow: "none !important"
                }
            },
            MuiButton: {
                root: {
                    boxShadow: "none !important",
                    padding: "6px 23px"
                },
                disableElevation: true,
                label: {
                    textTransform: "capitalize !important",
                    borderRadius: "5px !important"
                }
            },
            MuiPaper: {
                root: {
                    borderRadius: "10px !important"
                }
            },
            MuiCard: {
                root: {
                    borderRadius: "10px !important"
                }
            },
            MuiSwitch: {
                root: {
                    width: 42,
                    height: 26,
                    padding: 0,
                    margin: 8
                },
                switchBase: {
                    padding: 1,
                    "&$checked, &$colorPrimary$checked, &$colorSecondary$checked": {
                        transform: "translateX(16px)",
                        color: "#fff",
                        "& + $track": {
                            opacity: 1,
                            border: "none"
                        }
                    }
                },
                thumb: {
                    width: 24,
                    height: 24
                },
                track: {
                    borderRadius: 13,
                    border: "1px solid #bdbdbd",
                    backgroundColor: "#fafafa",
                    opacity: 1,
                    transition:
                        "background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
                }
            }
        }
    } as any),
    {
        variants: ["h1", "h2", "h3", "h4", "h5", "h6"]
    }
);

export default theme;
