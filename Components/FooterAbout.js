import Image from "next/image";

export default function FooterAbout() {
    return (
        <div className="footerAbout">
            <div className="picture">
                <Image src={require("../public/assets/images/logoWhite.png")} alt="Faramouj" layout="fill" />
            </div>
            <p>

            </p>
        </div>
    )
}