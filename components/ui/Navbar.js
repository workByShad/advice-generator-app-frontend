import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.navbar}>
        <li>
          <Link href="/" className={styles.p}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/contribute" className={styles.p}>
            Contribute
          </Link>
        </li>
        <li>
          <Link href="/register" className={styles.p}>
            Register
          </Link>
        </li>
        <li>
          <Link href="/login" className={styles.p}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
