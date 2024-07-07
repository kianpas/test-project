import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";
import { Post } from "@/types/post";

const getPosts = async (): Promise<Post[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error(`API call failed with status ${res.status}`);
  }

  const posts: Post[] = await res.json();

  return posts;
};

const BlogPage = async () => {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post: Post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post}></PostCard>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
