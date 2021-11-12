import Image from "next/image";

export default function AcademyCard(props) {
  const color = props.color;
  const title = props.title;
  const publisher = props.publisher;
  const summary = props.summary;
  const lessons = props.lessons;
  const price = props.price;
  const link = props.link;
  const icon = props.icon;
  const gradient = props.gradient;
  return (
    <div className="academyCard">
      <div className="description">
        <div className="picture">
          <i className={icon} style={{ background: gradient }} />
        </div>
        <div className="top">
          <h4 className="title">{title}</h4>
          <h6 className="publisher">توسط {publisher}</h6>
        </div>
        <p>{summary}</p>
      </div>
      <div className="details">
        <div className="detail">
          <i className="fas fa-sticky-note" style={{ color: color }} />
          <label>{lessons}</label>
        </div>
        <div className="detail">
          <i className="fas fa-dollar-sign" style={{ color: color }} />
          <label>{price}</label>
        </div>
      </div>
      <div className="buttons">
        <a href={link} style={{ color: color }}>
          بیشتر
        </a>
      </div>
    </div>
  );
}
