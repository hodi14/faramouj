import Particles from "react-particles-js";

export default function ContentIf() {
  return (
    <div className="contentIf">
      <Particles
        params={{
          particles: {
            number: {
              value: 150,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            color: {
              value: "#F85D00",
            },
            opacity: {
              value: 0.5,
              anim: {
                enable: true,
              },
            },
            size: {
              value: 7,
              random: true,
              anim: {
                enable: false,
                speed: 3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              speed: 0.5,
              bounce: false,
            },
          },
        }}
      />
      <div className="centeredContent">
        <h2 className="persian">اگر شما:</h2>
        <p>
          کسب و کاری دارید که می خواهید با استفاده از تولید محتوا آن را رشد
          بدهید.
          <br />
          زمان و مهارت کافی برای کار با برنامه های گرافیکی و ویدیویی را ندارید.
          <br />
          نمی دانید چطوری می توان بازاریابی محتوای حرفه ای انجام دهید.
          <br />
          نمی دانید چه استراتژی برای موفقیت کسب و کار خود در تولیدمحتوا نیاز
          دارید.
          <br />
          میخواهید با تولید محتوای اصولی به رویای کسب و کار خود رنگ واقعیت
          بدهید.
        </p>
        <h2 className="persian">می توانید روی کمک فراموج حساب کنید.</h2>
      </div>
    </div>
  );
}
