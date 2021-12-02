import { useState, useEffect } from "react";

export default function FaqItem(props) {
  const question = props.question;
  const answer = props.answer;
  useEffect(() => {
    const buttons = document.querySelectorAll(".question button");
    const answers = document.querySelectorAll(".answer");
    for (let button of buttons) {
      button.onclick = () => {
        console.log("fine");
        const arrow = button.querySelector("i");
        if (arrow.classList.contains("fa-plus")) {
          const currAnswer = arrow.parentElement.parentElement.nextElementSibling;
          for (let other of buttons) {
            const i = other.querySelector("i");
            i.classList.remove("fa-minus");
            i.classList.add("fa-plus");
          }
          arrow.classList.remove("fa-plus");
          arrow.classList.add("fa-minus");
          for (let answer of answers) answer.classList.remove("opened");
          currAnswer.classList.add("opened");
        }
        else {
          for (let other of buttons) {
            const i = other.querySelector("i");
            i.classList.remove("fa-minus");
            i.classList.add("fa-plus");
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
        <button type="button">
          <i className="far fa-plus" />
        </button>
      </div>
      <div className="answer">
        <p>{answer}</p>
      </div>
    </div>
  );
}
