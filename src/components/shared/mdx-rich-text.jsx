import * as React from "react";
import tw, { theme } from "twin.macro";
import { css } from "@emotion/css";

import { MDXProvider } from "@mdx-js/react";
import { H2 } from "../../components/article/h2";
import { H3 } from "../../components/article/h3";
import { Img } from "../../components/article/img";
import { Intro } from "../../components/article/intro";
import { Body } from "../../components/article/body";
import { Outro } from "../../components/article/outro";
import { Link } from "../../components/shared/link";

const H2Wrap = ({ id, children }) => {
  return <H2 id={id}>{children}</H2>;
};

const H3Wrap = ({ id, children }) => {
  return <H3 id={id}>{children}</H3>;
};

const A = ({ href, children }) => {
  return <Link to={href}>{children}</Link>;
};

const components = {
  h2: H2Wrap,
  h3: H3Wrap,
  a: A,
  img: Img,
  Intro,
  Body,
  Outro,
};

const styledClassNames = {
  article: css`
    min-height: 200px;
    a {
      color: ${theme`colors.zudo-link`};
      ${tw`font-bold px-[3px]`}
      &:visited {
        color: #713f12;
      }
      &:hover,
      &:focus,
      &:active {
        ${tw`text-white bg-black text-shadow-none no-underline`}
      }
    }
    em {
      ${tw`font-bold not-italic px-[3px]`}
    }
    strong {
      ${tw`font-bold text-red-700 px-[3px]`}
    }
    b,
    strong {
      font-weight: bold;
      margin-right: 2px;
      margin-left: 2px;
    }
    mark {
      background: #ff0;
      color: #000;
    }
    small {
      font-size: 80%;
    }
    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }
    sup {
      top: -0.5em;
    }
    sub {
      bottom: -0.25em;
    }
    hr {
      box-sizing: content-box;
      height: 0;
    }
    code {
      ${tw`bg-gray-200 py-[3px] px-[6px] mx-[4px] font-mono`}
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
    hr {
      ${tw`pb-vgap-md`}
      ${tw`border-0 border-b-1 border-solid border-black`}
      background: transparent;
      height: 0;
      overflow: hidden;
    }
    hr::before {
      content: "";
      display: table;
    }
    hr::after {
      clear: both;
      content: "";
      display: table;
    }
    h4 {
      ${tw`font-bold`}
    }
    p {
      ${tw`pb-vgap-md`}
    }
    ul {
      ${tw`list-disc`}
      ${tw`ml-hgap-md pb-vgap-md space-y-vgap-xs`}
      ul {
        ${tw`ml-hgap-sm pb-0`}
      }
    }
    ol {
      ${tw`list-decimal`}
      ${tw`ml-hgap-md pb-vgap-md space-y-vgap-xs`}
      ol {
        ${tw`ml-hgap-sm pb-0`}
      }
    }
    blockquote {
      ${tw`mb-vgap-md`}
      ${tw`pt-vgap-sm pl-hgap-sm`}
      ${tw`sm:pl-hgap-md`}
      ${tw`border-l-1 border-gray-400`}
      p {
        ${tw`pb-vgap-sm`}
      }
    }

    /* PrismJS 1.22.0
    https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript */
    /**
    * prism.js tomorrow night eighties for JavaScript, CoffeeScript, CSS and HTML
    * Based on https://github.com/chriskempson/tomorrow-theme
    * @author Rose Pritchard
    */

    code[class*="language-"],
    pre[class*="language-"] {
      color: #ccc;
      background: none;
      ${tw`font-mono px-0 mx-0`}
      ${tw`text-xs lg:text-sm leading-snug`}
      white-space: pre;
      word-spacing: normal;
      word-break: normal;
      word-wrap: normal;

      -moz-tab-size: 4;
      -o-tab-size: 4;
      tab-size: 4;

      -webkit-hyphens: none;
      -moz-hyphens: none;
      -ms-hyphens: none;
      hyphens: none;
    }

    /* Code blocks */
    pre[class*="language-"] {
      ${tw`mb-vgap-md px-hgap-sm py-vgap-sm`}
      overflow: auto;
    }

    :not(pre) > code[class*="language-"],
    pre[class*="language-"] {
      background: #2d2d2d;
    }

    /* Inline code */
    :not(pre) > code[class*="language-"] {
      padding: 0.1em;
      border-radius: 0.3em;
      white-space: normal;
    }

    .token.comment,
    .token.block-comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
      color: #999;
    }

    .token.punctuation {
      color: #ccc;
    }

    .token.tag,
    .token.attr-name,
    .token.namespace,
    .token.deleted {
      color: #e2777a;
    }

    .token.function-name {
      color: #6196cc;
    }

    .token.boolean,
    .token.number,
    .token.function {
      color: #f08d49;
    }

    .token.property,
    .token.class-name,
    .token.constant,
    .token.symbol {
      color: #f8c555;
    }

    .token.selector,
    .token.important,
    .token.atrule,
    .token.keyword,
    .token.builtin {
      color: #cc99cd;
    }

    .token.string,
    .token.char,
    .token.attr-value,
    .token.regex,
    .token.variable {
      color: #7ec699;
    }

    .token.operator,
    .token.entity,
    .token.url {
      color: #67cdcc;
    }

    .token.important,
    .token.bold {
      font-weight: bold;
    }
    .token.italic {
      font-style: italic;
    }

    .token.entity {
      cursor: help;
    }

    .token.inserted {
      color: green;
    }
  `,
};

const MdxRichText = ({ children }) => {
  return (
    <MDXProvider components={components}>
      <div className={styledClassNames.article}>{children}</div>
    </MDXProvider>
  );
};

export { MdxRichText };
