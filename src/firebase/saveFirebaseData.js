import { doc, getFirestore, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export const saveFirebaseData = (data) => {
  const db = getFirestore();
  const auth = getAuth();

  const userEmail = auth.currentUser.email;
  const docRef = doc(db, "users", userEmail);

  setDoc(docRef, { data }, { merge: true });
};
