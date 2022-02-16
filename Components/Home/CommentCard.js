import Script from "next/script";
import { useState, useRef } from "react";

export default function CommentCard(props) {
  const text = props.text;
  const name = props.name;
  const position = props.position;
  const audio = "../assets/audio/" + props.audio;
  const ref = useRef();
  const bars = [];
  const [state, setState] = useState("pause");
  const toggleState = () => {
    if (state == "pause") {
      setState("play");
      ref.current.play();
    } 
    else {
      setState("pause");
      ref.current.pause();
    }
  };
  for (let i = 0; i < 20; i++) bars.push(0);

  return (
    <div className="commentCard">
      <div className="text">
        <h4>{text}</h4>
      </div>
      <div className="bottom">
        <div className="name">
          <div className="icon">
            <i className="fal fa-user-circle" />
          </div>
          <div>
            <p>{name}</p>
            <p>{position}</p>
          </div>
        </div>
        <div className={`voice ${state}`}>
          <button type="button" onClick={() => toggleState()}>
            <i className={`fal fa-${state=="play" ? "pause" : "play"}`} />
          </button>
          <video style={{ display: "none" }} ref={ref}>
            <source src={audio} />
          </video>
          <div className="bars">
            {bars.map((bar, i) => {
              return <div className="bar" key={i}></div>;
            })}
          </div>
        </div>
      </div>
      <Script src="../assets/scripts/wave.js" />
    </div>
  );
}
