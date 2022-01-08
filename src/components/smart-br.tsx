import React from "react"
import Box from "@material-ui/core/Box"

type Props = {
    sx?: any;
    fixed?: any;
};

export default function SmartBr({sx, fixed}: Props) {
    return (
        <Box
            component={"br"}
            sx={sx || {display: fixed ? "block" : ["none", "none", "block"]}}
        />
    )
}
