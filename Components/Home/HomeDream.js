import Image from "next/image";
import Particles from "react-particles-js";

export default function HomeDream() {
  return (
    <div className="homeDream">
      <Particles
        params={{
          particles: {
            number: {
                value: 75,
                density: {
                    enable: true,
                    value_area: 1000
                }
            },
            color: {
                value: ["#0071E3", "#F85D00", "#FFB629", "#FA3454"]
            },
            opacity: {
                value: 0.5,
                anim: {
                    enable: true
                }
            },
            size: {
                value: 15,
                random: true,
                anim: {
                    enable: false,
                    speed: 3
                }
            },
            line_linked: {
                enable: false
            },
            move: {
                speed: 0.5,
                bounce: false
            }
         }
        }}
      />

      <div className="centeredContent">
        <h2 className="persian">به رویای دیجیتالت رنگ واقعیت ببخش</h2>
        <div className="picture animation pop">
          <Image
            src={"/assets/images/homeDream.png"}
            alt="DREAM"
            layout="fill"
            
          />
        </div>
        <h2 className="english">Sense your Digital dream</h2>
      </div>
    </div>
  );
}
