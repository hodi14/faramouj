import Script from "next/script";
import { useState } from "react";

export default function CommentCard(props) {
  const text = props.text;
  const name = props.name;
  const position = props.position;
  const voice = props.voice;
  const bars = [];
  const [state, setState] = useState("");
  const toggleState = () => {
    if (state == "") setState("play");
    else setState("");
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
            <i className="fal fa-play" />
          </button>
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
