import Image from "next/image";
import hand from "../public/assets/images/seo/phone.png";

export default function SeoHand() {
  return (
    <div className="seoHand">
      <div className="centeredContent">
      <div className="picture animation pop">
        <Image loading="eager" src={hand} alt="دیده شدن" layout="fill" />
      </div>
      <div className="text">
        <h2>
          همون چیزیه که برای <br /> دیده شدن نیاز داری
        </h2>
      </div>
      </div>
    </div>
  );
}
