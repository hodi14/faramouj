import Image from "next/image";
import themeIcon from "../public/assets/images/themeIcon.png";

export default function HeaderRight() {
  return (
    <div className="headerRight theme">
      <button type="button">
        <Image src={themeIcon} alt="Theme" layout="fill" loading="lazy"/>
      </button>
    </div>
  );
}
