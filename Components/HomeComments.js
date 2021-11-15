import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CommentCard from "./CommentCard";
import comments from "../Data/comments";

export default function HomeComments() {
  const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });
  return (
    <div className="homeComments">
      <div className="title">
        <h2 className="persian">چیزی که مشتریان درباره ما میگن...</h2>
      </div>
      <OwlCarousel className="commentsCarousel" nav items={1} loop="true" rtl="true">
        {comments.map((comment, i) => {
          return <CommentCard 
            name = {comment.customerName}
            position = {comment.customerPosition}
            text = {comment.text}
            voice = {comment.voice}

          />;
        })}
      </OwlCarousel>
    </div>
  );
}
