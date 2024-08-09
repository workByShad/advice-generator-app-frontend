"use client";
import styles from "./page.module.css";
import Register from "@/components/Register";
import Login from "@/components/Login";

import { auth } from "@/firebaseConfig";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { signOutUser } from "@/utils/authUtils";

export default function Dashboard() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

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
      <main>
        <h1>Dashboard</h1>
        <p>Logged in</p>
        <p onClick={signOutUser}>Sign out</p>
      </main>
    );
  } else {
    return (
      <main>
        <h1>Dashboard</h1>

        {isRegistering ? (
          <Register toggle={() => setIsRegistering(false)} />
        ) : (
          <Login toggle={() => setIsRegistering(true)} />
        )}
      </main>
    );
  }
}
