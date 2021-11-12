import Image from "next/image";
import phoneIcon from "../public/assets/images/phoneIcon.png";

export default function HeaderLeft() {
    return (
      <div className="headerLeft phone">
          <a href='tel:02112345678'>
              <Image src={phoneIcon} layout="fill" alt="021-12345678" loading="lazy"/>
          </a>
      </div>
    );
  }
  