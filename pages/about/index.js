import Team from "../../Components/Team";
import employees from "../../Data/employees";
import { NextSeo } from "next-seo";

export default function AboutPage() {
  let teams = new Set();
  for (let employee of employees) teams.add(employee.team);
  teams = Array.from(teams);
  return (
    <section className="innerPage aboutPage">
      <NextSeo title=" درباره فراموج" />
      {teams.map((team, i) => {
        return <Team team={team} key={i} />;
      })}
    </section>
  );
}
