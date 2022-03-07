import Consultant from "../Components/Consultant";
import HomeAcademy from "../Components/Home/HomeAcademy";
import HomeBanner from "../Components/Home/HomeBanner";
import HomeBlog from "../Components/Home/HomeBlog";
import HomeCategories from "../Components/Home/HomeCategories";
import HomeComments from "../Components/Home/HomeComments";
import HomeDream from "../Components/Home/HomeDream";
import axios from 'axios';
import { useEffect } from "react";


export default function Home({blogPosts}) {
  useEffect(() => {
    !(function (e, t, a) {
      "use strict";
      var s = t.head || t.getElementsByTagName("head")[0],
        p = t.createElement("script");
      (e.iwmfBadge = a),
        (p.async = true),
        (p.src = "https://cdn.iwmf.ir/js/people-votes/people-vote-4-2.js"),
        s.appendChild(p);
    })(window, document, "b-bottom-left");
  })
  return (
    <section className="innerPage homePage">

      <HomeBanner />
      <HomeCategories />
      <HomeDream />
      <HomeAcademy />
      <Consultant category="" />
      {/* <HomeBlog blogPosts={blogPosts}/> */}
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
