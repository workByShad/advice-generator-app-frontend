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

// CREATE

export const addAdvice = async (
  e: React.FormEvent<HTMLFormElement>
): Promise<void> => {
  e.preventDefault();

  const form = e.target as HTMLFormElement;
  const adviceText = (form.elements.namedItem("adviceText") as HTMLInputElement)
    .value;

  const data: { adviceText: string } = {
    adviceText,
  };

  try {
    const docRef = await addDoc(collection(db, "advice"), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
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

export const getAllAdviceByUser = async (): Promise<void> => {
  const userId = "userId";

  const q = query(collection(db, "advice"), where("createdBy", "==", userId));

  try {
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (e: any) {
    console.error("Error getting document: ", e);
  }
};

// UPDATE
export const updateAdvice = async (): Promise<void> => {
  const adviceId = "from client side";
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
export const deleteAdvice = async (): Promise<void> => {
  const adviceId = "from client side";

  const adviceRef = doc(db, "advice", adviceId);

  try {
    await deleteDoc(adviceRef);

    console.log("Successfully deleted advice.");
  } catch (e: any) {
    console.error("Error deleting document: ", e);
  }
};
