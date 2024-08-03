import { auth } from "@/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

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
    console.log("User created:", user);

    // Update user profile to set the display name (username)
    await updateProfile(user, {
      displayName: form.username.value,
    });

    console.log("Username added:", user);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.error(`Error [${errorCode}]: ${errorMessage}`);
  }
};
