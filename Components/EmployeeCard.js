import Image from "next/image";

export default function EmployeeCard(props) {
    const name = props.name;
    const role = props.role;
    const imgPath = props.imgPath;
    return (
        <div className="employeeCard">
            <div className="picture">
                <Image src={imgPath} alt={name} layout="fill" loading="lazy"/>
            </div>
            <div className="detail">
                <h6>
                    {name}
                </h6>
                <p>
                    {role}
                </p>
            </div>
        </div>
    )
}