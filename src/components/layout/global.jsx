import * as React from "react";
import ctl from "@netlify/classnames-template-literals";
import { Header } from "../global/header";
import { Footer } from "../global/footer";

const GlobalLayout = ({ children }) => {
  return (
    <div className="min-h-screen relative">
      <Header />
      <div
        className={ctl(`
          w-auto max-w-[960px]
          mt-hgap-sm sm:mt-hgap-md
          mx-hgap-sm md:mx-auto
        `)}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export { GlobalLayout };
