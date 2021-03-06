import PageBanner from "../../Components/PageBanner";
import { NextSeo } from "next-seo";
import ContentWhat from "../../Components/Content/ContentWhat";
import ContentInvest from "../../Components/Content/ContentInvest";
import ContentIf from "../../Components/Content/ContentIf";
import ContentKnowledge from "../../Components/Content/ContentKnowledge";
import ScrollSection from "../../Components/ScrollSection";
import Script from "next/script";
import Consultant from "../../Components/Consultant";

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
        <ScrollSection count={5} />
        <ContentWhat />
        <ContentInvest />
        <ContentKnowledge />
        <ContentIf />
        <Consultant category="تولید محتوا " />
      </div>
      <Script src="../assets/scripts/parallax.js" />
    </section>
  );
}
