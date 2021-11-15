import Consultant from "../Components/Consultant";
import HomeAcademy from "../Components/HomeAcademy";
import HomeBanner from "../Components/HomeBanner";
import HomeBlog from "../Components/HomeBlog";
import HomeCategories from "../Components/HomeCategories";
import HomeComments from "../Components/HomeComments";
import HomeDream from "../Components/HomeDream";


export default function Home() {
  return (
    <section className="innerPage homePage">

      <HomeBanner />
      <HomeCategories />
      <HomeDream />
      <HomeAcademy />
      <Consultant category="" />
      <HomeBlog />
      <HomeComments />
    </section>
  );
}
