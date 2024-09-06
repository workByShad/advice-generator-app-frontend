import { db } from "@/firebaseConfig";
import {
  collection,
  doc,
  query,
  where,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  DocumentData,
  FirestoreError,
} from "firebase/firestore";
import { getCurrentUser } from "./authUtils";

// CREATE

export const addAdvice = async (
  e: React.FormEvent<HTMLFormElement>
): Promise<boolean> => {
  e.preventDefault();

  const form = e.target as HTMLFormElement;
  const adviceText = (form.elements.namedItem("adviceText") as HTMLInputElement)
    .value;

  const userId = getCurrentUser();

  const data: { adviceText: string; createdBy: string } = {
    adviceText,
    createdBy: userId,
  };

  try {
    const docRef = await addDoc(collection(db, "advice"), data);
    console.log("Document written with ID: ", docRef.id);
    return true; // success
  } catch (error) {
    console.error("Error adding document: ", error);
    return false; // failure
  }
};

// READ

export const getAllAdvice = async (): Promise<[string, DocumentData][]> => {
  try {
    const querySnapshot = await getDocs(collection(db, "advice"));

    const allAdvice: [string, DocumentData][] = querySnapshot.docs.map(
      (doc) => [doc.id, doc.data()]
    );

    return allAdvice;
  } catch (e) {
    console.error(
      "Error getting documents: ",
      e instanceof FirestoreError ? e.message : e
    );

    return [];
  }
};

export const getAdvice = async (): Promise<void> => {
  const adviceId = "from client side";

  const adviceRef = doc(db, "advice", adviceId);

  try {
    const adviceSnap = await getDoc(adviceRef);

    if (adviceSnap.exists()) {
      console.log("Document data:", adviceSnap.data());
    } else {
      console.log("No such document!");
    }
  } catch (e: any) {
    console.error("Error getting document: ", e);
  }
};

export const getAllAdviceByUser = async (
  userId: string
): Promise<null | [string, DocumentData][]> => {
  const q = query(collection(db, "advice"), where("createdBy", "==", userId));

  try {
    const querySnapshot = await getDocs(q);

    const advices: [string, DocumentData][] = [];

    querySnapshot.forEach((doc) => {
      advices.push([doc.id, doc.data()]);
    });

    // always return either null or a non-empty array, never an empty array
    if (advices.length == 0) {
      return null;
    }

    return advices;
  } catch (e: any) {
    console.error("Error getting document: ", e);
    return null;
  }
};

// UPDATE
export const updateAdvice = async (adviceId: string): Promise<void> => {
  const updatedAdviceText = "updated advice text";

  const adviceRef = doc(db, "advice", adviceId);

  try {
    await updateDoc(adviceRef, {
      adviceText: updatedAdviceText,
    });

    console.log("Successfully updated advice text.");
  } catch (e: any) {
    console.error("Error updating document: ", e);
  }
};

// DELETE
export const deleteAdvice = async (adviceId: string): Promise<void> => {
  const adviceRef = doc(db, "advice", adviceId);

  try {
    await deleteDoc(adviceRef);

    console.log("Successfully deleted advice.");
  } catch (e: any) {
    console.error("Error deleting document: ", e);
  }
};
