function PostItem({ post, onSelectPost }) {
  return (
    <div className="border rounded p-3 mb-3 shadow-sm">
      <h2 className="font-semibold">{post.title}</h2>
      <button
        onClick={() => onSelectPost(post.id)}
        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
      >
        Ver detalhes
      </button>
    </div>
  );
}

export default PostItem;
