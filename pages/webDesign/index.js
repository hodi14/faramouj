import PageBanner from "../../Components/PageBanner";
import { NextSeo } from "next-seo";
import WebDescription from "../../Components/Web/WebDescription";
import WebSteps from "../../Components/Web/WebSteps";
import Consultant from "../../Components/Consultant";
import Faq from "../../Components/Faq";

export default function WebDesignPage() {
  return (
    <section className="innerPage webDesignPage">
      <NextSeo title="طراحی سایت" />
      <PageBanner nameEnglish="Web Design" namePersian="طراحی سایت" />
      <div className="bannerVideo">
        <video autoPlay loop muted>
          <source src="../assets/images/GIFS/web.mp4" />
        </video>
      </div>
      <div className="pageContents">
        <WebDescription />
        <WebSteps />
        <Consultant category="طراحی سایت" />
        <Faq />
      </div>
    </section>
  );
}
