import Image from "next/image";
import HomeBannerThree from "./HomeBannerThree";

export default function HomeBannerPicture() {
  return (
    // <HomeBannerThree />
    <div className="picture">
      <Image
        className="face"
        src={require("../public/assets/images/homeBanner.png")}
        alt="Faramouj"
        layout="fill"
        loading="lazy"
      />
    </div>
  );
}
