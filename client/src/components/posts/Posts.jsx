import Post from "../post/Post";

export default function Posts({ posts }) {
  return (
    <div className="posts flex flex-wrap m-5">
      {Object.values(posts).map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}
