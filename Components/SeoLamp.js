import { useEffect, useState } from "react";

export default function SeoLamps() {
  const [state, setState] = useState({ switch: "off" });
  const changeState = () => {
    if (state.switch == "on") setState({ switch: "off" });
    else setState({ switch: "on" });
  };
  useEffect(() => {
    document.querySelector(".switch").onclick = () => {
      document.querySelector(".seoLamp").style.transition = "0s";
      document.querySelector(".seoLamp").classList.toggle("on");
    };
    document.querySelector(".seoLamp").classList.remove("on");
  }, []);
  return (
    <div className="seoLamp animation backgroundR on">
      <div className={`switch ${state.switch}`} onClick={() => changeState()}>
        <button type="button"></button>
      </div>
      <div className="centeredContent">
        <div className="text animation right">
          <h6>
            یه پاساژی رو تصور کنید که شما داخلش مغازه دارید، دکور مغازه همون
            طراحی سایت شماست هرچی زیباتر باشه آدم های توی پاساژ رو بیشتر جذب
            خودش میکنه اما این آدم ها از کجا میان... اگه گوگل رو یه پاساژ در نظر
            بگیریم، طبیعیه که مشتری های بیشتری از مغازه های طبقات پایین و جلوتر
            دیدن میکنن تا طبقات بالاتر، پس توی سرچ گوگل هم موقعیت سایت شما میشه
            همون جای مغازه در پاساژ. یعنی سایت هایی که در صفحه اول و نتایج اول
            هستند بازدید بیشتری می گیرند.
          </h6>
          <h6>
            حالا تصور کنید نمایش کسب و کارتون بین این همه بازدید کننده ای که مستقیم
            دارن دنبال شما و خدماتوم میگردن چقدر میتونه سودآور باشه.
          </h6>
        </div>
      </div>
    </div>
  );
}
