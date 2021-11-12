import HeaderMenu from './HeaderMenu';
import HeaderRight from './HeaderRight';
import HeaderLeft from './HeaderLeft';

import {useState} from 'react';
import HeaderLogo from './HeaderLogo';

export default function Header() {
  const [menuClass, setClass] = useState("headerMenu");
  const openMenu = () => {
    if (menuClass == "headerMenu")
      setClass("headerMenu opened");
    else 
      setClass("headerMenu");
  }
  return (
    <header>
      <div className="container-fluid">
        <HeaderLogo />
        <HeaderRight />
        <div className="menuToggle" onClick = {() => {openMenu()}}>
          <i className="far fa-bars"></i>
        </div>
        <HeaderMenu menuClass={menuClass}/>
        <HeaderLeft />
      </div>
    </header>
  );
}
