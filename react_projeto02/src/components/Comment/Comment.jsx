function Comment({ comment }) {
  return (
    <div className="border-t py-2">
      <p className="font-semibold">{comment.name}</p>
      <p className="text-sm text-gray-600">{comment.email}</p>
      <p>{comment.body}</p>
    </div>
  );
}

export default Comment;
