import { useState } from "react";

export default function FaqItem(props) {
  const question = props.question;
  const answer = props.answer;
  const [item, setItem] = useState({ state: "", icon: "far fa-plus" });

  const toggleState = () => {
    if (item.state == "")
      setItem({ state: "opened", icon: "far fa-minus" });
    else setItem({ state: "", icon: "far fa-plus" });
  };

  return (
    <div className="faqItem">
      <div className="question">
        <h6>{question}</h6>
        <i
          className={item.icon}
          onClick={() => {
            toggleState();
          }}
        />
      </div>
      <div className={`answer ${item.state}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
}
