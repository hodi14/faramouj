import Image from "next/image";

export default function SeoPuzzle() {
  return (
    <div className="seoPuzzle">
      <div className="centeredContent">
        <h2>از کجا میتونم شروع کنم؟</h2>
        <div className="steps">
          <div className="step one">
            <div className="number">
              <p>01</p>
            </div>
            <div className="text">
              <h4 className="persian">
                این موارد احتیاج به بررسی دارن 
                <br />
                <span>
                ( انالیز سایت ، کسب و کار ، رقبا
                ، کلمات کلیدی )
                </span>
              </h4>
              <p>
              هر سایتی  برای سئو کردن احتیاج به تحلیل سایت و کسب و کار داره ، اگه کار طراحی
              سایتت رو فراموج انجام داده که یه قهوه سفارش بده و نوش جان کنید چون فقط نیاز
              هست که کلمات کلیدی و رقبا رو بررسی کنیم اما اگه سایتت رو با نیروی داخلی یا
              مجموعه دیگه طراحی کردی احتیاج هست کامل بررسی بشه تا ایرادات و تغییرات لازم
              توش اعمال بشه
              </p>
            </div>
          </div>
          <div className="step picture animation pop">
            <Image
              src="/../public/assets/images/seo/puzzle.png"
              alt="puzzle"
              layout="fill"
              loading="lazy"
            />
          </div>
          <div className="step two">
            <div className="number">
              <p>02</p>
            </div>
            <div className="text">
              <h4 className="persian" >برنامه ریزی و استراتژی</h4>
              <p>
              سرعت برای ما اهمیت ویژه ای داره پس با برنامه
              ریزی و استراتژی دقیق خیال شما رو از کیفیت
              انجام کار راحت میکنیم.
              </p>
            </div>
          </div>
          <div className="step three">
            <div className="number">
              <p>03</p>
            </div>
            <div className="text">
              <h4 className="persian">گزارش دهی منظم</h4>
              <p>
              روند پیشرفت شما رو به رخ میکشیم تا قدم به
              قدم مسیر رو در کنار هم طی کنیم
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
