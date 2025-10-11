import { useState } from "react";
import PostList from "./components/PostList/PostList.jsx";
import PostDetails from "./components/PostDetails/PostDetails.jsx";

function App() {
  const [selectedPostId, setSelectedPostId] = useState(null);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Mini Blog React</h1>
      {selectedPostId ? (
        <PostDetails
          postId={selectedPostId}
          onBack={() => setSelectedPostId(null)}
        />
      ) : (
        <PostList onSelectPost={setSelectedPostId} />
      )}
    </div>
  );
}

export default App;
