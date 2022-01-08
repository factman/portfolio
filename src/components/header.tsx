import React, {useEffect, useState} from "react"
import {Button, Hidden, IconButton, useTheme} from "@material-ui/core"
import Box from "@material-ui/core/Box"
import Logo from "./logo"
import Menu from "./menu"
import InnerContainer from "./inner-container"
import Theme from "./theme"
import HeaderSearch from "./header-search"
import MobileMenu from "./mobile-menu"
import site from "../utilities/site"
import {FiBell, FiMessageCircle} from "react-icons/fi"
import UserMenu from "./user-menu"
import {useSelector} from "../reduxStore"
import {useDispatch} from "react-redux"
import {Action_SetUserAuth} from "../reduxStore/user/actions"
import {UserObject} from "../utilities/types"

type Props = {
    overlay?: boolean;
};

export default function Header({overlay}: Props) {
    const dispatch = useDispatch()
    const theme = useTheme()
    const classes = styles(theme)
    const {auth}: UserObject = useSelector((store) => store.user)
    const [overScrolled, setOverScroll] = useState(false)

    const login = () => {
        dispatch(Action_SetUserAuth({auth: true}))
    }

    const handleScroll = () => {
        if (window.scrollY >= 100) {
            setOverScroll(true)
        }

        if (window.scrollY < 100) {
            setOverScroll(false)
        }
    }

    useEffect(() => {
        handleScroll()
        document.addEventListener("scroll", handleScroll)
        return () => {
            document.removeEventListener("scroll", handleScroll)
        }
        // eslint-disable-next-line
    }, [])

    return (
        <Box
            component={"div"}
            style={
                (overlay && !overScrolled ? classes.headerOverlay : classes.headerCon) as any
            }
        >
            <InnerContainer>
                <Box component={"div"} style={classes.innerCon as any}>
                    <Box component={"div"} style={classes.left as any}>
                        <Logo title={site.meta.title}/>
                        <Menu/>
                    </Box>
                    <Hidden only={["xs", "sm"]}>
                        <Box
                            component={"div"}
                            style={classes.right as any}
                        >
                            <HeaderSearch/>
                            {auth ? (
                                <Box style={classes.controls as any} component={"div"}>
                                    <Theme/>
                                    <IconButton style={classes.button}>
                                        <FiMessageCircle color={"white"} size={25}/>
                                    </IconButton>
                                    <IconButton style={classes.button}>
                                        <FiBell color={"white"} size={25}/>
                                    </IconButton>
                                    <UserMenu/>
                                </Box>
                            ) : (
                                <Box style={classes.controls as any} component={"div"}>
                                    <Theme/>
                                    <Button
                                        onClick={login}
                                        variant={"text"}
                                        style={classes.button}
                                    >
                                        Log In
                                    </Button>
                                    <Button
                                        onClick={login}
                                        variant={"outlined"}
                                        style={classes.button}
                                    >
                                        Join Now
                                    </Button>
                                </Box>
                            )}
                        </Box>
                    </Hidden>
                    <MobileMenu/>
                </Box>
            </InnerContainer>
        </Box>
    )
}

const styles = (theme: any) => ({
    headerCon: {
        backgroundColor: theme.palette.colors.backgroundDark,
        position: "sticky",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "backgroundColor 300ms ease-out"
    },
    headerOverlay: {
        backgroundColor: "transparent",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "backgroundColor 300ms ease-out"
    },
    innerCon: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    left: {
        flexDirection: "row",
        alignItems: "center",
        display: "flex"
    },
    right: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    controls: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    button: {
        color: theme.palette.colors.white,
        borderColor: theme.palette.colors.white,
        marginLeft: theme.spacing(2)
    }
})
