import React from "react"
import {Avatar, Button, Paper, useTheme} from "@material-ui/core"
import avatar from "../../assets/images/avatar.png"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

export default function UserCard() {
    const theme = useTheme()
    const classes = styles(theme)

    return (
        <Paper style={classes.userCard} elevation={0}>
            <Avatar
                src={avatar}
                alt={""}
                style={classes.avatar}
            />
            <Typography align="center" variant={"h3"} color={"textPrimary"}>
                Jane Doe
            </Typography>
            <Typography
                style={classes.about}
                align="center"
                color={"textSecondary"}
            >
                Actress, Cheerleader Connect with me.
                <br/>
                My profile will inspire you :-)
            </Typography>
            <Box component={"div"} style={classes.buttonCon as any}>
                <Button size={"small"} variant={"contained"} color={"primary"}>
                    Edit Profile
                </Button>
                <Button size={"small"} variant={"outlined"} color={"primary"}>
                    Contact Me
                </Button>
            </Box>
        </Paper>
    )
}

const styles = (theme: any) => ({
    userCard: {
        padding: theme.spacing(3),
        paddingTop: theme.spacing(6)
    },
    avatar: {
        width: 115,
        height: 115,
        margin: "auto",
        marginBottom: theme.spacing(3)
    },
    about: {
        margin: `${theme.spacing(2)}px auto ${theme.spacing(3)}px auto`,
        fontSize: "15px",
        lineHeight: "28px"
    },
    buttonCon: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
})
