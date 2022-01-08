import React, {ReactNode} from "react"
import Box from "@material-ui/core/Box"
import {useHistory} from "react-router-dom";

type Props = {
    href: string;
    children: ReactNode;
    onClick?: () => void;
    style?: any;
};

export default function Link({onClick, href, children, style}: Props) {
    const router = useHistory()

    return (
        <Box component={"span"} style={{cursor: "pointer", display: "inline-block", ...style}} onClick={() => {
            router.push(href)
            if (onClick) {
                onClick()
            }
        }}>
            {children}
        </Box>
    )
}
