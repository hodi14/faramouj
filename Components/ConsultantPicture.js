import Image from "next/image";

export default function ConsultantPicture() {
    return (
        <div className="picture animation pop">
            <Image src="/../public/assets/images/chair.png" alt="chair" layout="fill" loading="lazy"/>
        </div>
    )
}