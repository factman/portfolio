import React from 'react';
import {Helmet} from "react-helmet";

type Props = {
    title: string;
    description?: string;
};

export default function Seo({title, description}: Props) {
    return (
        <Helmet>
            <title>{title} — Portfolio for everyone.</title>
            <meta
                content={`${title} — Portfolio for everyone.`}
                name="title"
            />
            <meta
                content={description || "Advance portfolio for every professional no nail that next job."}
                name="description"
            />
            <meta
                content={`${title} — Portfolio for everyone.`}
                property="og:title"
            />
            <meta
                content={description || "Advance portfolio for every professional no nail that next job."}
                property="og:description"
            />
            <meta
                content={`${title} — Portfolio for everyone.`}
                property="twitter:title"
            />
            <meta
                content={description || "Advance portfolio for every professional no nail that next job."}
                property="twitter:description"
            />

            <meta content="website" property="og:type"/>
            <meta content="http://localhost:3000/" property="og:url"/>
            <meta content="http://localhost:3000/logo512.png" property="og:image"/>
            <meta content="summary_large_image" property="twitter:card"/>
            <meta content="http://localhost:3000/" property="twitter:url"/>
            <meta content="http://localhost:3000/logo512.png" property="twitter:image"/>
        </Helmet>
    );
}
