const activeEnv = process.env.NODE_ENV || "development";

require("dotenv").config({
  path: `.env.${activeEnv}`,
});

module.exports = {
  siteMetadata: {
    title: "takazudo Gatsby Doc template",
    titleTemplate: "%s | takazudo Gatsby Doc template",
    siteUrl: "https://localhost",
    description: "takazudo Gatsby Doc template description",
    author: `A developer`,
    globalNav: [{ href: "/", text: "Home" }],
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets\/svgs/,
        },
      },
    },
    //{
    //  resolve: "gatsby-source-filesystem",
    //  options: {
    //    name: "images",
    //    path: "./src/images/",
    //  },
    //  __key: "images",
    //},
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notes`,
        path: `${__dirname}/src/mdx-pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fragments`,
        path: `${__dirname}/src/mdx-fragments`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/mdx-pages`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          notes: require.resolve("./src/templates/mdx-notes-layout.jsx"),
          fragments: require.resolve("./src/templates/mdx-fragments-layout.jsx"),
        },
        //gatsbyRemarkPlugins: ["gatsby-remark-table-of-contents"],
        remarkPlugins: [
          require("remark-external-links"),
          require("remark-breaks"),
          // enable attr syntax for img elements
          [require("remark-attr"), { elements: ["link"] }],
        ],
        rehypePlugins: [
          require("rehype-slug"),
          [require("@mapbox/rehype-prism"), { ignoreMissing: true }],
        ],
      },
    },
  ],
};
