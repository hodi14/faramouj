import FaqItem from "./FaqItem";
import faq from "../Data/faq";

export default function Faq() {
  return (
    <div className="faq">
      <div className="centeredContent">
      <div className="title">
        <h2 className="persian">
           سوالات متداول
        </h2>
      </div>
        <ul>
          {faq.map((f, i) => {
            return (
              <li key={i}>
                <FaqItem question={f.question} answer={f.answer} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
