import Image from "next/image";

import user from "../public/assets/images/seo/user.png";
import star from "../public/assets/images/seo/star.png";
import shield from "../public/assets/images/seo/shield.png";
import folder from "../public/assets/images/seo/folder.png";

export default function SeoStats() {
  return (
    <div className="seoStats">
      <div className="centeredContent">
        <div className="title">
          <h2>
            آمار جهانی از
            <br />
            اهمیت سئو
          </h2>
          <h4>Global statistics on the importance of SEO</h4>
        </div>
        <div className="items">
          <div className="item">
            <div className="picture animation pop">
                <Image src={folder} alt="شروع وبگردی با جست و جو" layout="fill" loading="lazy"/>
            </div>
            <div className="text">
                <h6>
                شروع وبگردی
                    <br />
                    با جست و جو
                </h6>
                <p>

                </p>
            </div>
          </div>
          <div className="item">
            <div className="picture animation pop">
                <Image src={shield} alt="فقط دیدن صفحه 1 نتایج" layout="fill" loading="lazy" />
            </div>
            <div className="text">
                <h6>
                     فقط دیدن
                    <br />
                    صفحه 1 نتایج
                </h6>
                <p>

                </p>
            </div>
          </div>
          <div className="item">
            <div className="picture animation pop">
                <Image src={star} alt="کلیک برروی نتایج اول" layout="fill" loading="lazy" />
            </div>
            <div className="text">
                <h6>
                    کلیک برروی
                    <br />
                    نتایج اول
                </h6>
                <p>

                </p>
            </div>
          </div>
          <div className="item">
            <div className="picture animation pop">
                <Image src={user} alt="عدم اعتماد به تبلیغ گوگل" layout="fill" loading="lazy"/>
            </div>
            <div className="text">
                <h6>
                    عدم اعتماد به
                    <br />
                    تبلیغ گوگل
                </h6>
                <p>

                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
