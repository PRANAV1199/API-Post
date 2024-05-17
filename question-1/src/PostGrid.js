import "./styles.css";
import PostCard from "./PostCard";
import React, { useState, useEffect } from "react";

export default function PostGrid() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log("Error");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="PostGrid">
      {data.map((item) => (
        <PostCard
          userid={item.userId}
          id={item.id}
          title={item.title}
          body={item.body}
        />
      ))}
    </div>
  );
}
