import PageBanner from "../../Components/PageBanner";
import { NextSeo } from "next-seo";
import SeoHand from "../../Components/SeoHand";
import SeoLamp from "../../Components/SeoLamp";
import SeoStats from "../../Components/seoStats";
import ScrollSection from "../../Components/ScrollSection";
import Consultant from "../../Components/Consultant";
import SeoPuzzle from "../../Components/SeoPuzzle";
import Script from "next/script";

export default function SeoPage() {
  return (
    <section className="innerPage seoPage">
      <PageBanner nameEnglish="SEO" namePersian=" سئو" />
      <NextSeo title="بهینه سازی" />
      <div className="bannerVideo">
        <video autoPlay loop muted>
          <source src="../assets/images/GIFS/seo.mp4" />
        </video>
      </div>

      <div className="pageContents">
        <ScrollSection count={5} />
        <SeoHand />
        <SeoLamp />
        <SeoStats />
        <Consultant category="بهینه سازی" />
        <SeoPuzzle />
      </div>
      <Script src="../assets/scripts/parallax.js" />
    </section>
  );
}
