import Image from "next/image";

export default function HomeBannerPicture() {
  return (
    <div className="picture">
      <Image
        className="face"
        src={"/assets/images/homeBanner.png"}
        alt="Faramouj"
        layout="fill"
        
      />
    </div>
  );
}
