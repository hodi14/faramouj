import { useState } from "react";

export default function SeoLamps() {
  const [state, setState] = useState({ light: "", switch: "on" });
  const changeState = () => {
    if (state.light == "") setState({ light: "off", switch: "off" });
    else setState({ light: "", switch: "on" });
  };
  return (
    <div className="seoLamp animation backgroundR ">
      <div className={`light ${state.light}`}></div>
      <div className={`switch ${state.switch}`} onClick={() => changeState()}>
        <button type="button"></button>
      </div>
      <div className="centeredContent">
        <div className="text animation right">
          <h6>
            یه پاساژ ای رو تصور کنید که شما داخلش مغازه دارید ، دکور مغازه همون
            طراحی سایت شماست هرچی زیبا تر باشه آدم های توی پاساژ رو بیشتر جذب
            خودش میکنه اما این آدم ها از کجا میان... امروز آدم ها چیزایی که نیاز
            دارن و سرچ میکنن و اگه گوگل رو یک پاساژ در نظر بگیریم، موقعیت ما توی
            سرچ گوگل میشه همون جا نمایی مغازمون .
          </h6>
          <h6>
            تصور کنید نمایش کسب و کارمون بین این همه بازدید کننده ای که مستقیم
            دارن دنبال ما و خدمات ما میگردن چقد میتونه جذاب باشه.
          </h6>
        </div>
      </div>
    </div>
  );
}
