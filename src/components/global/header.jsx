import * as React from "react";
import ctl from "@netlify/classnames-template-literals";
import { Link } from "../shared/link";
import { MenuFlyout } from "./menu-flyout";
import { useSiteMetadata } from "../../hooks/use-site-metadata";

const Header = ({ logoTagName = "div" }) => {
  const { title, globalNav } = useSiteMetadata();
  const LogoTag = logoTagName;
  return (
    <div
      className={ctl(`
        px-hgap-sm
        border-black 
        border-b-5 md:border-b-[10px]
        max-w-[1080px] mx-auto
        font-futura
      `)}
    >
      {/* 
        1280px - 120px*2
      */}
      <header
        className={ctl(`
          flex items-center mx-auto max-w-[960px]
        `)}
      >
        <LogoTag
          className={ctl(`
            grow font-bold
            py-[1rem] md:py-[2rem] 
            text-lg md:text-xl lg:text-2xl
          `)}
        >
          <Link to="/" className="zudo-invert-color-link no-underline">
            {title}
          </Link>
        </LogoTag>
        <div className="md:hidden">
          <MenuFlyout items={globalNav} />
        </div>
        <nav className="grow-0 text-lg hidden md:block">
          <ul className="flex space-x-hgap-sm">
            {globalNav.map((item) => {
              return (
                <li key={item.href}>
                  <Link to={item.href} className="zudo-invert-color-link">
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export { Header };
