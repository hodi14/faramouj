import Image from 'next/image';
export default function ContentWhat() {
    return (
        <div className="contentWhat">
            <div className="centeredContent">
                <div className="title">
                    <h2 className="persian">
                        تولید محتوا <br/> چیست؟
                    </h2>
                </div>
                <div className="text">
                    <p>
                        تولید محتوا یعنی تولید و انتشار اطلاعات در رسانه های 
                        مختلف به ویژه رسانه های دیجیتال و شبکه های اجتماعی.
                        تولید محتوا انواع مختلفی داره مثل تولید محتوای متنی، گرافیکی، ویدئویی و صوتی .
                    </p>
                    <div className="picture animation right">
                        <Image src="/../public/assets/images/content/binoculars.png" alt="تولید محتوا" layout="fill" loading="lazy"/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}