import React, {ReactNode} from "react"
import {Grid, GridSize} from "@material-ui/core"

type Props = {
    size: boolean | GridSize | undefined;
    children: ReactNode;
};

export default function PageColumn({size, children}: Props) {
    const classes = styles();

    return (
        <Grid item xs={12} sm={12} md={size} style={classes.root as any}>
            {children}
        </Grid>
    )
}

const styles = () => ({
    root: {
        display: "flex",
        flexDirection: "column"
    }
})
