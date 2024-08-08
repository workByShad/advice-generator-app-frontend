import Link from "next/link";
import styles from "./Navbar.module.css";
import ShowLogin from "./ShowLogin";

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
        <ShowLogin />
      </ul>
    </nav>
  );
};

export default Navbar;
