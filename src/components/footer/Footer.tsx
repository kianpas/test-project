import styles from "./footer.module.css";

interface Props {}

const Footer = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.text}>Creative Thoughts @ All right reserved.</div>
    </div>
  );
};

export default Footer;
