import React from "react"
import {Divider, Fab, Grid, Paper, useTheme} from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import {FaPen} from "react-icons/fa"

export default function UserCredential() {
    const theme = useTheme()
    const classes = styles(theme)

    return (
        <Paper elevation={0} style={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={6} lg>
                    <Typography color={"textPrimary"}>Union Status</Typography>
                    <Typography color={"textSecondary"}>
                        Make-Up Artists & Hair Stylists Guild
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg>
                    <Typography color={"textPrimary"}>Race/Ethnicity</Typography>
                    <Typography color={"textSecondary"}>American</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg>
                    <Typography color={"textPrimary"}>Pronoun</Typography>
                    <Typography color={"textSecondary"}>She/Her</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg>
                    <Typography color={"textPrimary"}>Country</Typography>
                    <Typography color={"textSecondary"}>United States</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg>
                    <Typography color={"textPrimary"}>City</Typography>
                    <Typography color={"textSecondary"}>Seattle, WA</Typography>
                </Grid>
            </Grid>
            <Divider/>
            <SectionHead title={"Portfolio"}/>
            <Divider/>
            <SectionHead title={"MY BIOGRAPHY"}/>
            <Typography color={"textSecondary"}>
                One love
                <br/>
                One heart
                <br/>
                {`Let's`} get together and feel alright
                <br/>
                (hear the children crying)
                <br/>
                One love (hear the children crying)
                <br/>
                One heart {`(sayin')`}
                <br/>
                Give thanks and praise to the Lord and I will feel alright {`(sayin')`}
                <br/>
                {`Let's`} get together and feel alright
                <br/>
                (whoa whoa whoa whoa)
                <br/>
                Let them all pass, all their dirty remarks (one love)
                <br/>
                There is one question {`I'd`} really love to ask (one heart)
                <br/>
                Is there a place for the hopeless sinners
                <br/>
                Who has hurt all mankind just to save his own (believe)
            </Typography>
            <Divider/>
            <SectionHead title={"SKILLS & ASPIRATIONS"}/>
            <Typography color={"textSecondary"}>
                Stand-in, Singer, Stage manager
            </Typography>
            <Divider/>
            <SectionHead title={"EXPERIENCE"}/>
            <Divider/>
            <SectionHead title={"EDUCATION"}/>
            <Divider/>
            <Grid
                container
                spacing={10}
                alignItems={"center"}
                justifyContent={"space-between"}
            >
                <Grid item xs={12} sm={12} md>
                    <SectionHead title={"AWARDS & HONORS"}/>
                </Grid>
                <Box
                    component={Grid}
                    sx={{display: ["none", "none", "block"]}}
                    // @ts-ignore
                    item
                    xs={12}
                    sm={12}
                    md
                >
                    <SectionHead title={"LANGUAGES"}/>
                </Box>
            </Grid>
            <Box component={"div"} sx={{display: ["block", "block", "none"]}}>
                <Divider/>
                <SectionHead title={"LANGUAGES"}/>
            </Box>
            <Divider/>
            <SectionHead title={"WORK LOCATIONS PREFERENCES"}/>
            <Typography color={"textSecondary"}>
                Seattle, WA, United States
                <br/>
                New York, NY, United States
                <br/>
                Los Angeles, CA, United States
                <br/>
            </Typography>
        </Paper>
    )
}

function SectionHead({title}: { title: string }) {
    const theme = useTheme()
    const classes = styles(theme)

    return (
        <Box component={"div"} style={classes.section as any}>
            <Typography
                style={classes.sectionTitle as any}
                variant={"h6"}
                color={"textPrimary"}
            >
                {title}
            </Typography>
            <Fab variant={"circular"} color={"primary"} size={"small"}>
                <FaPen/>
            </Fab>
        </Box>
    )
}

const styles = (theme: any) => ({
    root: {
        padding: theme.spacing(3),
        paddingBottom: theme.spacing(8)
    },
    section: {
        marginBottom: theme.spacing(2),
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    sectionTitle: {
        textTransform: "uppercase"
    }
})
