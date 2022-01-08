import React, {useState} from "react"
import {Avatar, Button, IconButton, Paper, useTheme} from "@material-ui/core"
import {FiBell, FiChevronDown, FiChevronRight, FiMenu, FiMessageCircle, FiX} from "react-icons/fi"
import Box from "@material-ui/core/Box"
import InnerContainer from "./inner-container"
import HeaderSearch from "./header-search"
import avatar from "../assets/images/avatar.png"
import Typography from "@material-ui/core/Typography"
import {MenuItems, UserMenuItems} from "../utilities/navigation"
import Theme from "./theme"
import {useSelector} from "../reduxStore"
import {useDispatch} from "react-redux"
import {Action_SetUserAuth} from "../reduxStore/user/actions"
import Link from "./Link";

export default function MobileMenu() {
    const dispatch = useDispatch()
    const theme = useTheme()
    const classes = styles(theme)
    const {auth} = useSelector(store => store.user)
    const [open, setOpen] = useState(false)
    const [openUserMenu, setOpenUserMenu] = useState(false)

    const login = () => {
        dispatch(Action_SetUserAuth({auth: true}))
    }

    const logout = () => {
        dispatch(Action_SetUserAuth({auth: false}))
    }

    return (
        <Box sx={{display: ["block", "block", "none"]}}>
            <Box component={"div"}>
                <IconButton
                    onClick={() => setOpen(prev => !prev)}
                    type={"button"}
                    style={classes.toggle}
                >
                    {open ? (
                        <FiX size={30} color={"white"}/>
                    ) : (
                        <FiMenu size={30} color={"white"}/>
                    )}
                </IconButton>
            </Box>
            {open ? (
                <Paper elevation={0} style={classes.menuRoot as any}>
                    <InnerContainer>
                        <Box style={classes.search} component={"div"}>
                            <HeaderSearch device={"mobile"}/>
                        </Box>
                        {auth ? (
                            <>
                                <Box component={"div"} style={classes.userCon as any}>
                                    <Avatar
                                        style={classes.avatar}
                                        alt={""}
                                        src={avatar}
                                    />
                                    <Typography style={classes.username}>
                                        Hello, Jane
                                    </Typography>
                                </Box>
                                <Box component={"div"}>
                                    <Typography
                                        style={classes.userMenu as any}
                                        color={"textSecondary"}
                                        onClick={() => setOpenUserMenu(prev => !prev)}
                                    >
                                        Your account
                                        {openUserMenu ? (
                                            <FiChevronDown size={35}/>
                                        ) : (
                                            <FiChevronRight size={35}/>
                                        )}
                                    </Typography>
                                    {openUserMenu ? (
                                        <Box style={classes.innerMenuCon} component={"div"}>
                                            {UserMenuItems.map((item, index) => (
                                                <Typography
                                                    key={index}
                                                    style={classes.menuItem}
                                                    color={"textSecondary"}
                                                    onClick={() => {
                                                        setOpenUserMenu(false)
                                                        setOpen(false)
                                                    }}
                                                >
                                                    <Link href={item.path}>{item.title}</Link>
                                                </Typography>
                                            ))}
                                        </Box>
                                    ) : null}
                                </Box>
                            </>
                        ) : null}
                        {MenuItems.map((item, index) => (
                            <Typography
                                key={index}
                                style={classes.menuItem}
                                color={"textSecondary"}
                                onClick={() => setOpen(false)}
                            >
                                <Link href={item.path}>{item.title}</Link>
                            </Typography>
                        ))}
                        <Box style={classes.actions as any} component={"div"}>
                            <Box component={"div"}>
                                {auth ? (
                                    <Button
                                        style={classes.button}
                                        variant={"contained"}
                                        color="primary"
                                        onClick={() => {
                                            setOpen(false)
                                            logout()
                                        }}
                                    >
                                        Log Out
                                    </Button>
                                ) : (
                                    <>
                                        <Button
                                            style={classes.button}
                                            variant={"contained"}
                                            color="primary"
                                            onClick={() => {
                                                setOpen(false)
                                                login()
                                            }}
                                        >
                                            Join Now
                                        </Button>
                                        <Button
                                            style={classes.button}
                                            variant={"text"}
                                            color="primary"
                                            onClick={() => {
                                                setOpen(false)
                                                login()
                                            }}
                                        >
                                            Log In
                                        </Button>
                                    </>
                                )}
                            </Box>
                            <Box component={"div"}>
                                <Theme color={theme.palette.primary.main}/>
                                {auth ? (
                                    <>
                                        <IconButton style={classes.iconButton}>
                                            <FiMessageCircle
                                                color={theme.palette.primary.main}
                                                size={25}
                                            />
                                        </IconButton>
                                        <IconButton style={classes.iconButton}>
                                            <FiBell color={theme.palette.primary.main} size={25}/>
                                        </IconButton>
                                    </>
                                ) : null}
                            </Box>
                        </Box>
                    </InnerContainer>
                </Paper>
            ) : null}
        </Box>
    )
}

const styles = (theme: any) => ({
    toggle: {
        color: theme.palette.colors.white,
        padding: theme.spacing(1)
    },
    menuRoot: {
        minHeight: 200,
        maxHeight: "calc(100vh - 100%)",
        overflow: "hidden",
        overflowY: "scroll",
        borderRadius: "0 !important",
        padding: "",
        margin: 0,
        width: "100%",
        position: "absolute",
        top: "100%",
        left: 0,
        zIndex: 90
    },
    search: {
        margin: `${theme.spacing(3)}px 0`
    },
    userCon: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderBottom: `0.2px solid ${theme.palette.text.secondary}55`,
        padding: `${theme.spacing(2)}px 0`,
        position: "sticky",
        top: 0,
        backgroundColor: theme.palette.background.paper
    },
    avatar: {
        width: theme.spacing(7),
        height: theme.spacing(7)
    },
    username: {
        display: "block",
        fontSize: "15px",
        lineHeight: "30px",
        marginLeft: theme.spacing(3)
    },
    userMenu: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: "14px",
        lineHeight: "24px",
        borderBottom: `0.2px solid ${theme.palette.text.secondary}55`,
        padding: `${theme.spacing(1)}px 0`,
        outline: "none",
        cursor: "pointer"
    },
    innerMenuCon: {
        paddingLeft: theme.spacing(4)
    },
    menuItem: {
        display: "block",
        fontSize: "14px",
        lineHeight: "24px",
        borderBottom: `0.2px solid ${theme.palette.text.secondary}55`,
        padding: `${theme.spacing(1.5)}px 0`,
        outline: "none"
    },
    actions: {
        display: "flex",
        flexDirection: "row",
        padding: `${theme.spacing(3)}px 0`,
        justifyContent: "space-between",
        alignItems: "center"
    },
    button: {
        marginRight: theme.spacing(2)
    },
    iconButton: {
        marginLeft: theme.spacing(2)
    }
})
