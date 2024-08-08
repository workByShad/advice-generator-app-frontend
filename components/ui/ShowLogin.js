"use client";

import styles from "./ShowLogin.module.css";

import { isLoggedIn, signOutUser } from "@/utils/authUtils";

const ShowLogin = () => {
  const loggedIn = isLoggedIn();

  if (loggedIn) {
    return (
      <>
        <li>
          <p className={styles.p} onClick={signOutUser}>
            Sign out
          </p>
        </li>
      </>
    );
  } else {
    return (
      <>
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
      </>
    );
  }
};

export default ShowLogin;
