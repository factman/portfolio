import React from "react"
import {Avatar, Theme, useTheme} from "@material-ui/core"
import Box from "@material-ui/core/Box"
import avatar from "../assets/images/avatar.png"

export default function UserMenu() {
    const theme = useTheme()
    const classes = styles(theme)

    return (
        <Box component={"div"}>
            <Box style={classes.menu}>
                <Avatar
                    style={classes.avatar}
                    alt={""}
                    src={avatar}
                />
            </Box>
        </Box>
    )
}

const styles = (theme: Theme) => ({
    menu: {
        color: "white",
        marginLeft: theme.spacing(2)
    },
    avatar: {
        width: theme.spacing(6),
        height: theme.spacing(6)
    }
})
