import Image from "next/image";

export default function FooterLogo() {
  return (
    <div className="footerLogo">
      <div className="picture">
        <Image
          src={"/assets/images/logoWhite.png"}
          alt="Faramouj"
          layout="fill"
        />
      </div>
    </div>
  );
}
