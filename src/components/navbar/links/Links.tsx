import Link from "next/link";
import styles from "./links.module.css";

interface Props {}

const Links = (props: Props) => {
  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/posts" },
  ];

  return (
    <div className={styles.links}>
      {links.map((link) => (
        <Link href={link.path} key={link.title}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
