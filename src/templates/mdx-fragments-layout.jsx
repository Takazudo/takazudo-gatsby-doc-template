import * as React from "react";
import { MdxRichText } from "../components/shared/mdx-rich-text";

const Layout = ({ children }) => {
  return <MdxRichText>{children}</MdxRichText>;
};

export default Layout;
