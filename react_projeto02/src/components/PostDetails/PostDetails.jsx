import { useEffect, useState } from "react";
import Comment from "../Comment/Comment.jsx";

function PostDetails({ postId, onBack }) {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const postRes = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      const postData = await postRes.json();
      const commentsRes = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      );
      const commentsData = await commentsRes.json();
      setPost(postData);
      setComments(commentsData);
      setLoading(false);
    }
    fetchData();
  }, [postId]);

  if (loading) return <p>A carregar...</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p className="mb-4">{post.body}</p>

      <h3 className="font-semibold mb-2">Comentários:</h3>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}

      <button
        onClick={onBack}
        className="mt-4 px-3 py-1 bg-gray-500 text-white rounded"
      >
        Voltar
      </button>
    </div>
  );
}

export default PostDetails;
