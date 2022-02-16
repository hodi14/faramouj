import { NextSeo } from "next-seo";
import Image from "next/image";
import ContactLocation from "../../Components/ContactLocation";

export default function Contact() {

  return (
    <section className="innerPage contactPage">
      <NextSeo title=" تماس با ما" />

      <div className="pageContents">
        <div className="text">
          <h1>با ما در تماس باشید</h1>
          <h4>با یه زنگ به رویای دیجیتالت رنگ واقعیت ببخش</h4>
          <a href="tel:+9802188015422">
            تماس <i className="fal fa-angle-left" />
          </a>
        </div>
        <div className="map">
          <ContactLocation country="iran" mail="info@faramouj.ir" tel="+9802188015422"/>
          <ContactLocation country="austria" mail="info@faramouj.ir" tel="+436602980100"/>
          <Image
            src={"/assets/images/map.png"}
            alt="Map"
            layout="fill"
            
          />
        </div>
      </div>
    </section>
  );
}
