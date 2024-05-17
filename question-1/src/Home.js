import PostGrid from "./PostGrid";
import Cover from "./Cover";
import { Link, Route, Router } from "react-router-dom";

import "./styles.css";

export default function Home() {
  return (
    <div>
      <Cover />
      <PostGrid />
    </div>
  );
}
