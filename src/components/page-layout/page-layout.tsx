import React, {ReactNode} from "react"
import {Grid, GridSpacing, useTheme} from "@material-ui/core"
import InnerContainer from "../inner-container"
import Box from "@material-ui/core/Box"

type Props = {
    spacing?: GridSpacing;
    children: ReactNode;
}

export default function PageLayout({spacing, children}: Props) {
    const theme = useTheme()
    const classes = styles(theme)

    return (
        <Box component={"div"} style={classes.root}>
            <InnerContainer>
                <Grid container spacing={spacing || 3}>
                    {children}
                </Grid>
            </InnerContainer>
        </Box>
    )
}

const styles = (theme: any) => ({
    root: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8)
    }
})
