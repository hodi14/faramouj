import Image from "next/image";
import Link from "next/link";

export default function HomecategoryCard(props) {
  const nameEnglish = props.nameEnglish;
  const namePersian = props.namePersian;
  let image;
  if (props.picture)
    image = (
      <Image
        src={require("../public/assets/images/webCategory.png")}
        layout="fill"
        alt="Web Design"
      />
    );

  return (
    <Link href={props.link}>
      <a className="homeCategoryCard">
        <div className="content">
          <h2 className="english">{nameEnglish}</h2>
          <h2 className="persian">{namePersian}</h2>
          <div className="picture animation right">{image}</div>
        </div>
      </a>
    </Link>
  );
}
