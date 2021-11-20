import Image from "next/image";

export default function EmployeeCard(props) {
    const name = props.name;
    const position = props.position;
    const id = props.id;
    const imgPath = "/../public/assets/images/Employees/" + id.toString() + ".jpeg";
    return (
        <div className="employeeCard">
            <div className="picture">
                <Image src={imgPath} alt={name} layout="fill" />
            </div>
            <div className="detail">
                <h6>
                    {name}
                </h6>
                <p>
                    {position}
                </p>
            </div>
        </div>
    )
}