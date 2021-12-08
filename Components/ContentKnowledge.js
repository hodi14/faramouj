import Particles from "react-particles-js";

export default function ContentKnowledge() {
  return (
    <div className="contentKnowledge">
      <Particles
        params={{
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            color: {
              value: "#FFB629",
            },
            opacity: {
              value: 0.5,
              anim: {
                enable: true,
              },
            },
            size: {
              value: 20,
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
        <h2 className="persian">
          اما این کار به زمان و دانش
          <br /> کافی نیاز دارد چون:
        </h2>
        <p>
          باید بدونید که چطوری میشه به صورت اصولی بازاریابی محتوا انجام داد.
          <br />
          باید مهارت و زمان کافی و توانایی کار با چندین برنامه ی گرافیکی و
          ویدیویی را داشته باشید تا بتونید به صورت حرفه ای محتوای گرافیکی و
          ویدیویی محتوا تولید کنید.
          <br />
          باید بتونید استراتژی متناسب با کسب و کار خود را تعیین کنید.
        </p>
      </div>
      <Particles
        params={{
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            color: {
              value: "#FFB629",
            },
            opacity: {
              value: 0.5,
              anim: {
                enable: true,
              },
            },
            size: {
              value: 20,
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
    </div>
  );
}
