import React, {ReactNode} from "react"
import {Container} from "@material-ui/core"
import Box from "@material-ui/core/Box"

type Props = {
    children: ReactNode;
    className?: string;
    style?: any;
    sx?: any;
};

export default function InnerContainer({children, className, sx, style}: Props) {
    return (
        <Container fixed>
            <Box component={"div"} className={className} style={style} sx={sx}>
                {children}
            </Box>
        </Container>
    )
}
