import * as React from "react";
import { Helmet } from "react-helmet";
import { useSiteMetadata } from "../../hooks/use-site-metadata";

const HeadMeta = ({ pageTitle, path }) => {
  const isIndexPage = path === "/";
  const { title: siteTitle, titleTemplate, siteUrl } = useSiteMetadata();

  const meta = {
    title: pageTitle || siteTitle,
    titleTemplate,
    url: `${siteUrl}${path}`,
  };

  if (isIndexPage) {
    meta.titleTemplate = "%s";
    meta.url = siteUrl;
  }

  return (
    <Helmet title={meta.title} titleTemplate={meta.titleTemplate}>
      <link rel="canonical" href={meta.url} />
    </Helmet>
  );
};

export { HeadMeta };
