import { auth } from "@/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

export const createNewUser = async (e) => {
  e.preventDefault();

  const form = e.target;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      form.email.value,
      form.password.value
    );

    // Signed up
    const user = userCredential.user;

    // Update user profile to set the display name (username)
    await updateProfile(user, {
      displayName: form.username.value,
    });

    console.log("User created:", user);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.error(`Error [${errorCode}]: ${errorMessage}`);
  }
};

export const getCurrentUser = async (e) => {
  e.preventDefault();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;

      console.log(`User is signed in: ${uid}`);
    } else {
      console.log("No user is signed in.");
    }
  });
};
