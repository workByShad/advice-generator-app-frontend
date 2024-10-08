import { auth } from "@/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

// CREATE
export const createNewUser = async (
  e: React.FormEvent<HTMLFormElement>
): Promise<void> => {
  e.preventDefault();

  const form = e.target as HTMLFormElement;

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
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.error(`Error [${errorCode}]: ${errorMessage}`);
  }
};

// CREATE
export const updateUsername = async (
  e: React.FormEvent<HTMLFormElement>
): Promise<boolean> => {
  e.preventDefault();

  const form = e.target as HTMLFormElement;

  try {
    const user = auth.currentUser;

    if (user == null) {
      return false;
    }

    // Update user profile to set the display name (username)
    await updateProfile(user, {
      displayName: form.username.value,
    });

    console.log("Profile updated!");

    return true;
  } catch (error: any) {
    console.error(error.message);

    return false;
  }
};

// GET
export const getCurrentUser = (): string => {
  const user = auth.currentUser;

  if (user) {
    const uid = user.uid;

    console.log(`User is signed in: ${uid}`);

    return uid;
  } else {
    console.log("No user is signed in.");

    return "";
  }
};

// LOG IN
export const logInUser = async (
  e: React.FormEvent<HTMLFormElement>
): Promise<void> => {
  e.preventDefault();

  const form = e.target as HTMLFormElement;

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      form.email.value,
      form.password.value
    );

    // Signed in
    const user = userCredential.user;

    console.log("User logged in:", user);
  } catch (error: any) {
    console.error(error.message);
  }
};

// LOG OUT
export const signOutUser = async (): Promise<void> => {
  try {
    await signOut(auth);

    console.log("sign out successful.");
  } catch (error) {
    console.log(`sign out failed: ${error}`);
  }
};

// PASSWORD RESET
export const resetPasswordEmail = async (
  e: React.FormEvent<HTMLFormElement>
): Promise<boolean> => {
  e.preventDefault();

  const form = e.target as HTMLFormElement;

  try {
    await sendPasswordResetEmail(auth, form.email.value);

    console.log("Password reset email sent!");
    return true;
  } catch (error: any) {
    console.error(error.message);
    return false;
  }
};

// DELETE ACCOUNT
export const deleteAccount = async (
  e: React.FormEvent<HTMLFormElement>
): Promise<boolean> => {
  e.preventDefault();

  const form = e.target as HTMLFormElement;

  try {
    const user = auth.currentUser;

    if (user == null) {
      return false;
    }

    if (user.email == form.email.value) {
      await deleteUser(user);

      return true;
    } else {
      return false;
    }
  } catch (error: any) {
    console.error(error.message);
    return false;
  }
};
