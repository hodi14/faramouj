import Image from "next/image";
export default function WebDescription() {
  return (
    <div className="webDescription">
      <div className="centeredContent">
        <div className="picture animation left">
          <Image
            src={require("../public/assets/images/web/box.png")}
            alt=" Web Design "
            layout="fill"
            loading="lazy"
          />
        </div>
        <div className="text">
          <h2 className="persian">ساخت سایت برای هر نوع کسب و کاری ضروریه...</h2>
          <p>
            مهم نیست چه محصول یا خدماتی دارین، تو هر زمینه ای که فعالیت میکنین
            باید وبسایتی داشته باشین و تو فضای مجازی حضور داشته باشین که از
            رقباتون عقب نمونید. به طور خلاصه سایت به کسب و کارتون اعتبار میده،
            موجب جلب اعتماد کاربراتون میشه و به عنوان یه کانال تبلیغاتی قدرتمند
            و ویترین 24 ساعته شما میتونه باشه.
          </p>
        </div>
      </div>
    </div>
  );
}
