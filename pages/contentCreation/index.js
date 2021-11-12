import PageBanner from "../../Components/PageBanner";
import { NextSeo } from "next-seo";
import ContentWhat from "../../Components/ContentWhat";
import ContentInvest from "../../Components/ContentInvest";
import ContentIf from "../../Components/ContentIf";
import ContentKnowledge from "../../Components/ContentKnowledge";
import ScrollSection from "../../Components/ScrollSection";
import Script from "next/script";

export default function ContentProductionPage() {
  return (
    <section className="innerPage contentProductionPage">
      <PageBanner nameEnglish="Content Creation" namePersian=" تولید محتوا" />
      <NextSeo title="تولید محتوا" />
      <div className="bannerVideo">
        <video autoPlay loop muted>
          <source src="../assets/images/GIFS/content.mp4" />
        </video>
      </div>

      <div className="pageContents">
        <ScrollSection count={4} />
        <ContentWhat />
        <ContentInvest />
        <ContentKnowledge />
        <ContentIf />
      </div>
      <Script src="../assets/scripts/parallax.js" />
    </section>
  );
}
