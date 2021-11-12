import ConsultantForm from "./ConsultantForm";
import ConsultantPicture from "./ConsultantPicture";

export default function Consultant(props) {
  const category = props.category;
  return (
    <div className="consultant">
      <div className="centeredContent">
        <ConsultantPicture />
        <ConsultantForm category={category}/>
      </div>
    </div>
  );
}
