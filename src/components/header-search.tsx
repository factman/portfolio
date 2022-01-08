import React from "react"
import {IconButton, InputBase, useTheme} from "@material-ui/core"
import {FiSearch} from "react-icons/fi"
import Box from "@material-ui/core/Box"

type Props = {
    device?: string;
};

export default function HeaderSearch({device}: Props) {
    const theme = useTheme()
    const classes = styles(device)(theme)

    return (
        <Box
            component={"div"}
            style={classes.searchRoot}
            sx={{
                width: ["100%", "100%", "200px", "350px"]
            }}
        >
            <InputBase
                style={classes.searchInput}
                placeholder="Search"
                type={"search"}
                name={"search"}
                inputMode={"search"}
            />
            <IconButton type="submit" style={classes.searchIcon}>
                <FiSearch/>
            </IconButton>
        </Box>
    )
}

const styles = (device?: string) =>
    (theme: any) => ({
        searchRoot: {
            padding: `${theme.spacing(0.25)}px ${theme.spacing(0.5)}px`,
            display: "flex",
            alignItems: "center",
            backgroundColor:
                device === "mobile"
                    ? theme.palette.type === "dark"
                        ? "rgba(253, 253, 253, 0.3)"
                        : "rgba(0, 0, 0, 0.3)"
                    : "rgba(253, 253, 253, 0.3)",
            borderRadius: "5px"
        },
        searchInput: {
            marginLeft: theme.spacing(1),
            flex: 1,
            color: theme.palette.colors.white
        },
        searchIcon: {
            padding: theme.spacing(1),
            color: theme.palette.colors.white
        }
    })
