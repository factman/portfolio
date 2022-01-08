import React, {ReactNode} from "react"
import Header from "./header"
import Footer from "./footer"
import Box from "@material-ui/core/Box"

type Props = {
    overlayHeader?: boolean;
    children: ReactNode;
};

export default function Layout({children, overlayHeader}: Props) {
    return (
        <Box component={"div"}>
            <Header overlay={overlayHeader}/>
            <Box component={"main"}>{children}</Box>
            <Footer/>
        </Box>
    )
}
