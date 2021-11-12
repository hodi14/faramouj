import AcademyCard from "./AcademyCard";
import AcademyLogin from "./AcademyLogin";
import courses from "../Data/courses";

export default function HomeAcademy() {
  return (
    <div className="homeAcademy">
      <div className="courses">
        {courses.map((course, i) => {
          return (
            <AcademyCard
              key = {i}
              color={course.color}
              title={course.title}
              publisher={course.publisher}
              summary={course.summary}
              lessons={course.lessons}
              link={course.link}
              icon={course.icon}
              gradient={course.gradient}
              price={course.price}
            />
          );
        })}
      </div>
      <AcademyLogin />
    </div>
  );
}
