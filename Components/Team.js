import employees from "../Data/employees";
import EmployeeCard from "./EmployeeCard";

export default function Team(props) {
  const team = props.team;
  return (
    <div className="team">
      <h4>{team}</h4>
      <div className="row">
        {employees.map((employee, i) => {
          if (employee.team == team)
            return (
              <div className="col-lg-4 col-sm-6 col-12" key={i}>
                <EmployeeCard
                  id={employee.id}
                  name={employee.name}
                  position={employee.position}
                />
              </div>
            );
        })}
      </div>
    </div>
  );
}
