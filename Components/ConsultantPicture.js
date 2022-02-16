import Image from "next/image";

export default function ConsultantPicture() {
    return (
        <div className="picture animation pop">
            <Image loading="eager" src={"/assets/images/chair.png"} alt="chair" layout="fill" />
        </div>
    )
}