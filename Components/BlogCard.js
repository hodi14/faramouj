import Image from "next/image";

export default function BlogCard(props) {
    const category = props.category;
    const title = props.title;
    const shares = props.shares;
    const comments = props.comments;
    const likes = props.likes;
    const summary = props.summary;
    return (
        <div className="blogCard">
            <div className="text">
                <p className="category">
                    <span> ! </span>
                    {category}
                </p>
                <h2 className="title persian">
                    {title}
                </h2>
                <div className="stats">
                    <div className="shares">
                        {shares}
                        <i className="fas fa-share-alt" />
                    </div>
                    <div className="comments">
                        {comments}
                        <i className="fas fa-comments-alt" />
                    </div>
                    <div className="likes">
                        {likes}
                        <i className="fas fa-heart" />
                    </div>
                </div>
                <p className="summary">
                    {summary}
                </p>
                <div className="buttons">
                    <a href="#">
                        مطالعه بیشتر 
                        <i className="far fa-angle-left" />
                    </a>
                </div>
                </div>
            <div className="picture">
                <Image src={require(`../public/assets/images/blogs/${props.imgPath}`)} alt={title} layout="fill" loading="lazy"/>
            </div>
        </div>
    )
}