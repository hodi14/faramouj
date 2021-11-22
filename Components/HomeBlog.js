import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import blogs from "../Data/blogs";
import BlogCard from "./BlogCard";
import { useEffect, useState } from "react";

export default function HomeBlog() {
  const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

  const [data , setData] = useState([])
  useEffect(()=>{
    fetch('https://blog.faramouj.com/wp-json/wp/v2/posts').then(res=> res.json()).then(info=> setData(info))
    }, [])  
  console.log("posts: " + data);

  return (
    <div className="homeBlog">
      <OwlCarousel nav items={1} loop="true" rtl="true">
        {blogs.map((blog, i) => {
          return (
            <BlogCard
              key={i}
              category={blog.category}
              title={blog.title}
              shares={blog.shares}
              comments={blog.comments}
              likes={blog.likes}
              summary={blog.summary}
              imgPath={blog.imgPath}
            />
          );
        })}
      </OwlCarousel>
    </div>
  );
}
