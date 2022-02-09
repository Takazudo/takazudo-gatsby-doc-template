import * as React from "react";
import ctl from "@netlify/classnames-template-literals";

const Img = ({ src, alt, className }) => {
  return (
    <span
      className={ctl(`
        flex justify-center
      `)}
    >
      <span
        className={ctl(`
          flex justify-center
          ${className}
        `)}
      >
        <img
          src={src}
          alt={alt}
          className="block bg-black border border-gray-500"
        />
      </span>
    </span>
  );
};

export { Img };
