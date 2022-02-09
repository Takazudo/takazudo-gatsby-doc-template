import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            titleTemplate
            siteUrl
            description
            globalNav {
              href
              text
            }
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
