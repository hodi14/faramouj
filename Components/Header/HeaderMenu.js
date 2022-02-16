import Link from "next/link";
import { useState } from "react";

import HeaderLogo from "./HeaderLogo";

export default function HeaderMenu(props) {
  const menuClass = props.menuClass;
  const menuItems = [
    { link: "/", title: "  صفحه اصلی "},
    { link: "/webDesign", title: "  طراحی سایت "},
    { link: "/contentCreation", title: "  تولید محتوا " },
    { link: "/", title: " " },
    { link: "/seo", title: " سئو " },
    { link: "/contact", title: " تماس با ما  " },
    { link: "/about", title: " درباره فراموج  " },
  ];
  return (
    <div className={menuClass}>
      <ul>
        {menuItems.map((menuItem, i) => {
          if (i == 3)
            return (
              <li key={i} className="logo">
                <HeaderLogo />
              </li>
            );
          else
            return (
              <li key={i} className={menuItem.link.substr(1)}>
                <Link href={menuItem.link} >{menuItem.title}</Link>
              </li>
            );
        })}
      </ul>
    </div>
  );
}
