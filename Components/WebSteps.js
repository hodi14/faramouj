import Image from "next/image";
import WebCloud from "./WebCloud";
import WebFeature from "./WebFeature";
import WebQuestion from "./WebQuestion";
import WebTeacher from "./WebTeacher";
import WebVisual from "./WebVisual";

export default function WebSteps() {
  return (
    <div className="webSteps">
      <div className="title">
        <div className="content">
          <h2>ساخت یک سایت حرفه ای از اینجا شروع می شود</h2>
          <div className="picture animation pop">
            <Image
              src="/../public/assets/images/web/plant.png"
              layout="fill"
              alt="plant"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="steps animation">
        <WebQuestion />
        <WebCloud animation="right" />
        <WebCloud animation="left" />
        <WebVisual />
        <WebFeature />
        <WebTeacher />
      </div>
    </div>
  );
}
