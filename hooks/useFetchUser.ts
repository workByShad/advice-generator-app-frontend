import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "@/firebaseConfig";

const useFetchUser = () => {
  const [curUser, setCurUser] = useState<User | null>(null);

  useEffect(() => {
    // Calling onAuthStateChanged returns an 'Unsubscribe' function
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurUser(user);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return curUser;
};

export default useFetchUser;
