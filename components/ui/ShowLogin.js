"use client";

import Link from "next/link";
import styles from "./ShowLogin.module.css";

import { signOutUser } from "@/utils/authUtils";
import { auth } from "@/firebaseConfig";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

const ShowLogin = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Calling onAuthStateChanged returns an 'Unsubscribe' function
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoggedIn(!!user);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

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
