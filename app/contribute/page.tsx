"use client";
import Card from "@/components/Card";
import Form from "@/components/Form";
import { addAdvice } from "@/utils/firestoreUtils";
import { getCurrentUser } from "@/utils/authUtils";

import { auth } from "@/firebaseConfig";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

export default function Contribute(): React.ReactElement {
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
      <main>
        <h1>add an advice</h1>
        <Card>
          <Form handler={addAdvice}>
            <label htmlFor="adviceText">Enter your advice:</label>
            <textarea
              className="rounded-lg w-[30vw] h-[15vh] resize-none"
              id="adviceText"
              name="adviceText"
            ></textarea>
          </Form>
          {/* <button onClick={getCurrentUser}>Get current user</button> */}
        </Card>
      </main>
    );
  } else {
    return (
      <main>
        <Card>
          <h1>Please Log In.</h1>
        </Card>
      </main>
    );
  }
}
