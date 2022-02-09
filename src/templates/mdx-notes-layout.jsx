import * as React from "react";
import { HeadMeta } from "../components/global/head-meta";
import { parsePublishedDateFromPath } from "../utils/misc";
import { MdxRichText } from "../components/shared/mdx-rich-text";

const ArticleDate = ({ path }) => {
  const publishedDate = parsePublishedDateFromPath(path);
  return (
    <>
      {publishedDate && (
        <p className="text-sm text-gray-500 font-futura tracking-wider">
          created at: {publishedDate.formattedDateString}
        </p>
      )}
      {!publishedDate && (
        <div className="text-sm" aria-hidden="true">
          &nbsp;
        </div>
      )}
    </>
  );
};

const Layout = ({ pageContext, children, location }) => {
  const {
    frontmatter: { title },
  } = pageContext;

  return (
    <>
      <HeadMeta pageTitle={title} path={location.pathname} />
      <ArticleDate path={location.pathname} />
      <header className="pt-vgap-xs pb-vgap-sm">
        <h1 className="font-bold text-xl sm:text-xl md:text-2xl text-shadow-md">
          {title}
        </h1>
      </header>
      <MdxRichText>{children}</MdxRichText>
    </>
  );
};

export default Layout;
