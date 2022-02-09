import * as React from "react";
import ctl from "@netlify/classnames-template-literals";

const Outro = ({ children }) => {
  return (
    <div
      className={ctl(`
        border-t-1 border-dashed border-black
        pt-vgap-lg
      `)}
    >
      {children}
    </div>
  );
};

export { Outro };
