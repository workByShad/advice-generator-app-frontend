"use client";
import Register from "@/components/Register";
import Login from "@/components/Login";

import { auth } from "@/firebaseConfig";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import DashboardCard from "@/components/DashboardCard";

export default function Dashboard(): React.ReactElement {
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
    return <DashboardCard />;
  } else {
    return (
      <main>
        {isRegistering ? (
          <Register toggle={() => setIsRegistering(false)} />
        ) : (
          <Login toggle={() => setIsRegistering(true)} />
        )}
      </main>
    );
  }
}
