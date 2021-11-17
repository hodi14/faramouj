import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function HomecategoryCard(props) {
  const nameEnglish = props.nameEnglish;
  const namePersian = props.namePersian;
  let image;
  useEffect(() => {
    const categoryLinks = document.querySelectorAll(".homeCategoryCard");
    const menuItems = document.querySelectorAll("header .headerMenu li a");

    for (let categoryLink of categoryLinks) {
      categoryLink.onclick = () => {
        const linkClass = categoryLink.getAttribute("href").substring(1);
        const path = ".headerMenu ul li." + linkClass;
        console.log(path);
        for (let other of menuItems) other.parentElement.classList.remove("active");
        document.querySelector(`${path}`).classList.add("active");
      }
    }

  }, []);
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
        <i className="far fa-arrow-right arrow" />
        <div className="content">
          <h2 className="english">{nameEnglish}</h2>
          <h2 className="persian">{namePersian}</h2>
          <div className="picture animation right">{image}</div>
        </div>
      </a>
    </Link>
  );
}
