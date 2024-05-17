import "./styles.css";
import { Link } from "react-router-dom";

export default function PostCard({ userid, id, title, body }) {
  return (
    <Link to={`/post/${id}/${userid}`}>
      <div className="PostCard">
        <div className="title">{title}</div>
        <div className="content">{body}</div>
      </div>
    </Link>
  );
}
