import React from "react"
import {Avatar, Divider, Paper, useTheme} from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import image from "../../assets/images/project-14.png"

export default function UserMenuList() {
    const theme = useTheme()
    const classes = styles(theme)

    return (
        <Paper style={classes.userCard} elevation={0}>
            <Typography variant={"body2"} color={"textPrimary"}>
                Jobs & Projects
            </Typography>
            <Typography
                style={classes.link}
                variant={"body2"}
                color={"textSecondary"}
            >
                Applied
            </Typography>
            <Typography
                style={classes.link}
                variant={"body2"}
                color={"textSecondary"}
            >
                Viewed
            </Typography>
            <Typography
                style={classes.link}
                variant={"body2"}
                color={"textSecondary"}
            >
                Saved
            </Typography>
            <Divider orientation={"horizontal"} light style={classes.divider}/>
            <Typography variant={"body2"} color={"textPrimary"}>
                My Circles
            </Typography>
            <Typography
                style={classes.link}
                variant={"body2"}
                color={"textSecondary"}
            >
                No joined circles
            </Typography>
            <Divider orientation={"horizontal"} light style={classes.divider}/>
            <Typography variant={"body2"} color={"textPrimary"}>
                Latest project joined
            </Typography>
            {[1, 2, 3, 4].map(key => (
                <Box key={key} style={classes.listCon as any} component={"div"}>
                    <Avatar
                        style={classes.itemImage}
                        variant="rounded"
                        src={image}
                        alt={""}
                    />
                    <Box component={"div"}>
                        <Typography color={"primary"}>Looking new faces...</Typography>
                        <Typography color={"textSecondary"}>Mberak Company</Typography>
                        <Typography color={"textPrimary"}>Theatre producer</Typography>
                    </Box>
                </Box>
            ))}
        </Paper>
    )
}

const styles = (theme: any) => ({
    userCard: {
        padding: theme.spacing(3)
    },
    link: {
        lineHeight: "38px"
    },
    divider: {
        margin: `${theme.spacing(2)}px auto`
    },
    listCon: {
        display: "flex",
        flexDirection: "row",
        margin: `${theme.spacing(2)}px 0 ${theme.spacing(3)}px 0`,
        alignItems: "center"
    },
    itemImage: {
        width: 60,
        height: 60,
        marginRight: theme.spacing(1)
    }
})
