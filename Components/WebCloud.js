import Image from "next/image";

export default function WebCloud(props) {
  const direction = props.animation;
  return (
    <div className={`webCloud animation ${direction}`}>
      <div className="content">
        <Image
          src="/../public/assets/images/web/cloud.png"
          layout="fill"
          alt="cloud"
          loading="lazy"
        />
      </div>
    </div>
  );
}
