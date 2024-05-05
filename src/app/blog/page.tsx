import PostCard from "@/components/postCard/PostCard";

const posts = [
  { id: "1", title: "title1", img: "", body: "" },
  { id: "2", title: "title2", img: "", body: "" },
];

const BlogPage = () => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <PostCard post={posts}></PostCard>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
