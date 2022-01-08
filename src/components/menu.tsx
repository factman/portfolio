import React, {useState} from "react"
import {FiChevronDown} from "react-icons/fi"
import {Avatar, Button, Hidden, Popover, Theme, useTheme} from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import {MenuItems, UserMenuItems} from "../utilities/navigation"
import Box from "@material-ui/core/Box"
import {useSelector} from "../reduxStore"
import {Action_SetUserAuth} from "../reduxStore/user/actions"
import {useDispatch} from "react-redux"
import avatar from "../assets/images/avatar.png"
import Link from "./Link";

export default function Menu() {
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = useState(null)
    const theme = useTheme()
    const classes = styles(theme)
    const open = Boolean(anchorEl)
    const id = open ? "simple-popover" : undefined
    const {auth} = useSelector(store => store.user)

    const logout = () => {
        dispatch(Action_SetUserAuth({auth: false}))
    }

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget as any)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <Hidden only={["xs", "sm"]}>
            <Button
                aria-describedby={id}
                onClick={handleClick}
                variant={"text"}
                style={classes.menu}
            >
                <>
                    Browse{" "}
                    <FiChevronDown
                        color={"white"}
                        size={20}
                        alignmentBaseline={"baseline"}
                        style={{marginLeft: "8px"}}
                    />
                </>
            </Button>
            <Popover
                elevation={0}
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left"
                }}
                PaperProps={{
                    style: classes.paper as any,
                    elevation: 0,
                    onClick: handleClose
                }}
            >
                <Box component={"div"} style={classes.innerLeft}>
                    {MenuItems.map((item, index) => (
                        <Typography
                            key={index}
                            color={"textSecondary"}
                            style={classes.menuItem}
                        >
                            <Link href={item.path}>{item.title}</Link>
                        </Typography>
                    ))}
                </Box>
                {auth ? (
                    <Box component={"div"} style={classes.innerRight}>
                        <Box component={"div"} style={classes.userCon}>
                            <Avatar
                                src={avatar}
                                alt={""}
                            />
                            <Typography style={classes.userName} color={"primary"}>
                                Hello, Jane
                            </Typography>
                        </Box>
                        <Box component={"div"} style={classes.userMenuCon}>
                            {UserMenuItems.map((item, index) => (
                                <Typography
                                    key={index}
                                    color={"textSecondary"}
                                    style={classes.menuItem}
                                >
                                    <Link href={item.path}>{item.title}</Link>
                                </Typography>
                            ))}
                            {/* @ts-ignore */}
                            <Typography
                                color={"textSecondary"}
                                onClick={logout}
                                style={classes.menuItem}
                            >
                                <Link href={"/"}>Log Out</Link>
                            </Typography>
                        </Box>
                    </Box>
                ) : null}
            </Popover>
        </Hidden>
    )
}

const styles = (theme: Theme) => ({
    menu: {
        color: "white"
    },
    menuItem: {
        display: "block",
        fontSize: "14px",
        lineHeight: "24px",
        marginBottom: theme.spacing(0.5),
        outline: "none"
    },
    paper: {
        marginTop: theme.spacing(1),
        padding: 0,
        borderRadius: "10px",
        display: "flex",
        flexDirection: "row"
    },
    innerLeft: {
        padding: `${theme.spacing(3)}px ${theme.spacing(4)}px`
    },
    innerRight: {
        padding: `${theme.spacing(3)}px 0`,
        borderLeft: `0.5px solid ${theme.palette.text.secondary}`
    },
    userCon: {
        padding: `0 ${theme.spacing(4)}px ${theme.spacing(2)}px ${theme.spacing(4)}px`,
        borderBottom: `0.5px solid ${theme.palette.text.secondary}`
    },
    userName: {
        marginTop: theme.spacing()
    },
    userMenuCon: {
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 0 ${theme.spacing(
            4
        )}px`
    }
})
