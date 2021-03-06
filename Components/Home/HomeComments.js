import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CommentCard from "./CommentCard";
import comments from "../../Data/comments";

import {useEffect, useRef} from "react";

export default function HomeComments() {
  const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });
  useEffect(() => {
      document.querySelector(".homeComments").onclick = () => {
        const owlNavs = document.querySelectorAll(".commentsCarousel .owl-nav button");
        for (let owlNav of owlNavs) {
          owlNav.onclick = () => {
            const audios = document.querySelectorAll(".voice video");
            const voices = document.querySelectorAll(".voice");
            for (let voice of voices)
              voice.classList.remove("play");
            for (let audio of audios)
              audio.pause();
          }
        }
      }
  }, [])
  return (
    <div className="homeComments">
      <div className="title">
        <h2 className="persian">چیزی که مشتریان درباره ما میگن...</h2>
      </div>
      <OwlCarousel className="commentsCarousel" nav items={1} loop={false} rtl="true" >
        {comments.map((comment, i) => {
          return <CommentCard 
            name = {comment.customerName}
            position = {comment.customerPosition}
            text = {comment.text}
            audio = {comment.audio}
            key={i}
          />;
        })}
      </OwlCarousel>
    </div>
  );
}
