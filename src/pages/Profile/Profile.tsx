import React from "react"

import Seo from "../../components/Seo/Seo"
import Layout from "../../components/layout"
import PageLayout from "../../components/page-layout/page-layout"
import PageColumn from "../../components/page-layout/page-column"
import {Grid} from "@material-ui/core"
import UserCard from "../../components/profile/userCard"
import UserMenuList from "../../components/profile/userMenuList"
import Box from "@material-ui/core/Box"
import UserCredential from "../../components/profile/userCredential"

export default function Profile() {
    return (
        <Layout>
            <Seo title="Profile"/>
            <PageLayout spacing={3}>
                <PageColumn size={4}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <UserCard/>
                        </Grid>
                        <Box
                            sx={{display: ["none", "none", "block"]}}
                            component={Grid}
                            // @ts-ignore
                            item
                            xs={12}
                        >
                            <UserMenuList/>
                        </Box>
                    </Grid>
                </PageColumn>
                <PageColumn size={8}>
                    <UserCredential/>
                </PageColumn>
            </PageLayout>
        </Layout>
    )
}
