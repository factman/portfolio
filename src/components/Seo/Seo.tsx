import React from "react"
import {Helmet} from "react-helmet"
import site from "../../utilities/site"
import {useLocation} from "react-router-dom";

type Props = {
    title?: string;
    description?: string;
    image?: string;
    article?: string;
};

export default function Seo({title, description, image, article}: Props) {
    const {pathname} = useLocation();
    const siteMeta = site.meta

    const seo = {
        title: title ? `${title} | ${siteMeta.title}` : siteMeta.title,
        description: description || siteMeta.description,
        image: `${siteMeta.siteUrl}${image || siteMeta.image}`,
        url: `${siteMeta.siteUrl}${pathname}`
    }

    return (
        <Helmet title={seo.title}>
            <html lang="en-US"/>
            <link rel="alternate" href={seo.url} hrefLang="en-us"/>
            <link rel="alternate" href={seo.url} hrefLang="en"/>
            <link rel="alternate" href={seo.url} hrefLang="x-default"/>
            <meta name="description" content={seo.description}/>
            <meta name="image" content={seo.image}/>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, maximum-scale=1"
            />
            {seo.url && <meta property="og:url" content={seo.url}/>}
            {(article ? true : null) && <meta property="og:type" content="article"/>}
            {seo.title && <meta property="og:title" content={seo.title}/>}
            {seo.description && (
                <meta property="og:description" content={seo.description}/>
            )}
            {seo.image && <meta property="og:image" content={seo.image}/>}
            <meta name="twitter:card" content="summary_large_image"/>
            {siteMeta.twitterUsername && (
                <meta name="twitter:creator" content={siteMeta.twitterUsername}/>
            )}
            {seo.title && <meta name="twitter:title" content={seo.title}/>}
            {seo.description && (
                <meta name="twitter:description" content={seo.description}/>
            )}
            {seo.image && <meta name="twitter:image" content={seo.image}/>}
        </Helmet>
    )
}
