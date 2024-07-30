import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.p}>
        Check out my{" "}
        <a
          href="https://github.com/workByShad"
          target="_blank"
          rel="noopener noreferrer external"
          className={styles.p}
        >
          GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;
