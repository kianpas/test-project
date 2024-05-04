import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";

interface Props {}

const Navbar = (props: Props) => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Logo
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
