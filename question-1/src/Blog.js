import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function Blog() {
  let { postId, userId } = useParams();

  const [userdata, setUserData] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setUserData(jsonData);
      } catch (error) {
        console.log("Error");
      }

      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setComments(jsonData);
      } catch (error) {
        console.log("Error");
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <Link to="/">
        <div>Home</div>
      </Link>
      <div>
        <h2>Author Detatis</h2>
        <p>Name: {userdata.name}</p>
        <p>username: {userdata.username}</p>
        <p>email: {userdata.email}</p>
      </div>
      <div>
        <h2>Comments</h2>
        {comments.map((item) => (
          <div>
            <p>Nmae: {item.name}</p>
            <p>Email: {item.email}</p>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
