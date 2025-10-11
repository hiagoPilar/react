import { useEffect, useState } from "react";
import PostItem from "../PostItem/PostItem.jsx";

function PostList({ onSelectPost }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>A carregar...</p>;

  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} onSelectPost={onSelectPost} />
      ))}
    </div>
  );
}

export default PostList;
