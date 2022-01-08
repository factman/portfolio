import React from "react"
import logo from "../assets/svg/createensemble logo-01.svg"
import {Theme, useTheme} from "@material-ui/core"
import Box from "@material-ui/core/Box"
import Link from "./Link";

type Props = {
    title: string;
};

export default function Logo(props: Props) {
    const theme = useTheme()
    const classes = styles(theme)

    return (
        <Box component={"div"} style={classes.logo}>
            <Link href="/">
                <img src={logo} alt={props.title} height={30}/>
            </Link>
        </Box>
    )
}

const styles = (theme: Theme) => ({
    logo: {
        marginRight: theme.spacing(6),
        display: "inline-block"
    }
})
