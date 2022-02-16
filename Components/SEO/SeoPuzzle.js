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
                <span>(آنالیز سایت ، کسب و کار ، رقبا ، کلمات کلیدی)</span>
              </h4>
              <p>
                آنالیز سایت، کسب و کار، رقبا، کلمات کلیدی برای سئو باید سایت و
                کسب و کارتون تحلیل بشه، اگه کار طراحی سایتتون رو فراموج انجام
                داده، تا شما یه قهوه نوش جان کنید ما کلمات کلیدی و رقباتون رو
                بررسی می کنیم، در غیر اینصورت نیازهست سایت کامل بررسی بشه تا
                تغییرات لازم اعمال بشه.
              </p>
            </div>
          </div>
          <div className="step picture animation pop">
            <Image
              src={"/assets/images/seo/puzzle.png"}
              alt="puzzle"
              layout="fill"
            />
          </div>
          <div className="step two">
            <div className="number">
              <p>02</p>
            </div>
            <div className="text">
              <h4 className="persian">برنامه ریزی و استراتژی</h4>
              <p>
                سرعت برای ما اهمیت ویژه ای داره پس با برنامه ریزی و استراتژی
                دقیق خیال شما رو از کیفیت انجام کار راحت میکنیم.
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
                روند پیشرفت شما رو به رخ میکشیم تا قدم به قدم مسیر رو در کنار هم
                طی کنیم
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
