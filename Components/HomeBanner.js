import HomeBannerPicture from "./HomeBannerPicture";

export default function HomeBanner() {
  return (
    <div className="homeBanner">
      <div className="centeredContent">
        <h1 className="persian">فراموج</h1>
        <HomeBannerPicture />
        <h1 className="english">
          <span className="desktop">
          FARA <br /> MOUJ
          </span>
          <span className="responsive">
            FARAMOUJ
          </span>
        </h1>
      </div>
    </div>
  );
}