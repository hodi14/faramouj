import Consultant from "../Components/Consultant";
import HomeAcademy from "../Components/Home/HomeAcademy";
import HomeBanner from "../Components/Home/HomeBanner";
import HomeBlog from "../Components/Home/HomeBlog";
import HomeCategories from "../Components/Home/HomeCategories";
import HomeComments from "../Components/Home/HomeComments";
import HomeDream from "../Components/Home/HomeDream";
import axios from 'axios';


export default function Home({blogPosts}) {
  return (
    <section className="innerPage homePage">

      <HomeBanner />
      <HomeCategories />
      <HomeDream />
      <HomeAcademy />
      <Consultant category="" />
      <HomeBlog blogPosts={blogPosts}/>
      <HomeComments />
    </section>
  );
}

export async function getStaticProps() {
  let blogPosts;
  try {
    const res = await axios.get('https://blog.faramouj.com/wp-json/wp/v2/posts?per_page=3'); 
    blogPosts = JSON.stringify(res.data);
  }
  catch {
    blogPosts = [];
  }

  return {
    props: {
      blogPosts: blogPosts
    }
  }
}
