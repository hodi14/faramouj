import Image from "next/image";

export default function ContentInvest() {
  return (
    <div className="contentInvest">
      <div className="centeredContent">
        <div className="picture animation left">
          <Image
            src={require("../public/assets/images/content/planet.png")}
            layout="fill"
            alt="planet"
            loading="lazy"
          />
        </div>
        <div className="text">
          <div className="title">
            <h2 className="persian">
              چرا تولید محتوا یک <br /> سرمایه گذاری است؟
            </h2>
          </div>
          <p>
            افزایش فروش
            <br />
            برندینگ قوی تر
            <br />
            پتانسیل رشد زیاد
            <br />
            سکوی پرتاب مناسب برای کسب و کار
          </p>
        </div>
      </div>
    </div>
  );
}
