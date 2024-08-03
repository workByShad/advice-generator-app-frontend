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
} from "firebase/firestore";

export const addAdvice = async () => {
  const data = {
    adviceText: "advice from function",
  };

  try {
    const docRef = await addDoc(collection(db, "advice"), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getAllAdvice = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "advice"));

    console.log("Data acquired:", querySnapshot);
  } catch (e) {
    console.error("Error getting documents: ", e);
  }
};

export const getAdvice = async () => {
  const adviceId = "from client side";

  const adviceRef = doc(db, "advice", adviceId);

  try {
    const adviceSnap = await getDoc(adviceRef);

    if (adviceSnap.exists()) {
      console.log("Document data:", adviceSnap.data());
    } else {
      console.log("No such document!");
    }
  } catch (e) {
    console.error("Error getting document: ", e);
  }
};

export const getAllAdviceByUser = async () => {
  const userId = "userId";

  const q = query(collection(db, "advice"), where("createdBy", "==", userId));

  try {
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (e) {
    console.error("Error getting document: ", e);
  }
};

export const updateAdvice = async () => {
  const adviceId = "from client side";
  const updatedAdviceText = "updated advice text";

  const adviceRef = doc(db, "advice", adviceId);

  try {
    await updateDoc(adviceRef, {
      adviceText: updatedAdviceText,
    });

    console.log("Successfully updated advice text.");
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};

export const deleteAdvice = async () => {
  const adviceId = "from client side";

  const adviceRef = doc(db, "advice", adviceId);

  try {
    await deleteDoc(adviceRef);

    console.log("Successfully deleted advice.");
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
};
