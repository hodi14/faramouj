import { useState, useEffect } from "react";

export default function FaqItem(props) {
  const question = props.question;
  const answer = props.answer;
  useEffect(() => {
    const arrows = document.querySelectorAll(".question i");
    const answers = document.querySelectorAll(".answer");
    for (let arrow of arrows) {
      arrow.onclick = () => {
        if (arrow.classList.contains("fa-plus")) {
          const currAnswer = arrow.parentElement.nextElementSibling;

          for (let other of arrows) {
            other.classList.remove("fa-minus");
            other.classList.add("fa-plus");
          }
          arrow.classList.remove("fa-plus");
          arrow.classList.add("fa-minus");
          for (let answer of answers) answer.classList.remove("opened");
          currAnswer.classList.add("opened");
        }
        else {
          for (let other of arrows) {
            other.classList.remove("fa-minus");
            other.classList.add("fa-plus");
          }
          for (let answer of answers) answer.classList.remove("opened");
        }
      };
    }
  }, []);

  return (
    <div className="faqItem">
      <div className="question">
        <h6>{question}</h6>
        <i className="far fa-plus" />
      </div>
      <div className="answer">
        <p>{answer}</p>
      </div>
    </div>
  );
}
