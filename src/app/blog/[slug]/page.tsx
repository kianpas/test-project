import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import styles from "./singlePost.module.css";
import { Post } from "@/types/post";
interface Props {
  params: {
    slug: string; // `id`는 동적 라우팅에서 전달됨
  };
}

// API 호출 함수
const fetchPost = async (slug: string): Promise<Post> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch post with id ${slug}`);
  }
  return res.json();
};


const SinglePostPage = async ({ params }: Props) => {
  const post = await fetchPost(params.slug); // `id`로 API 호출
 
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {/* <Image src="/brand.png" alt="" fill className={styles.img} /> */}
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        
        <div className={styles.detail}>
          {/* <Image className={styles.avatar} src="" alt="" fill /> */}
        </div>
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Published</span>
          <span className={styles.detailValue}>Lorem</span>
        </div>
        <div className={styles.content}>
          {post.body}
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
