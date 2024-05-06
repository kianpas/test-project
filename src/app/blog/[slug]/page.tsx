import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/brand.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image className={styles.avatar} src="" alt="" fill />
        </div>
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Published</span>
          <span className={styles.detailValue}>Lorem</span>
        </div>
        <div className={styles.content}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          animi hic dolores a, cupiditate quidem voluptatem facere sunt nobis,
          tenetur ut iure voluptatum vel? Quisquam obcaecati accusamus
          perspiciatis dolorem tempora!
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
