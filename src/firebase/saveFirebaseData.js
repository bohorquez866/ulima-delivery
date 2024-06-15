import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "./configFirebase";
import { setEmail } from "./getfirestoredata";
import {
  setSub01,
  setSub02,
  setSub03,
  setSub04,
  setSub05,
  setSub06,
  setSub09,
  setSub10,
} from "./getSubScores";

export const saveFirebaseData = (data) => {
  const db = getFirestore();
  const auth = getAuth();

  const userEmail = auth.currentUser.email;
  const docUserRef = doc(db, "users", userEmail);

  setDoc(docUserRef, { data }, { merge: true });
};

export async function setDefaultSubs() {
  const auth = getAuth();
  const item_id = auth.currentUser.email;

  let questions = {
    "1a": 0,
    "1b": 0,
    "1c": 0,
    "2a": 0,
    "2b": 0,
    "2c": 0,
  };
  let defaultSubs = {};

  for (let index = 1; index <= 14; index++) {
    defaultSubs[`sub${index < 10 ? 0 : ""}${index}`] = questions;
  }

  await setDoc(doc(db, "subs", item_id), defaultSubs, { merge: true });
  console.log("subs back to default");
}

export async function processSubs() {
  const auth = getAuth();
  const userEmail = auth.currentUser.email;
  const subsRef = doc(db, "subs", userEmail);

  const docUserRef = doc(db, "users", userEmail);
  const docSnap = await getDoc(docUserRef);
  const data = docSnap.get("data");

  await setEmail(userEmail);

  await updateDoc(doc(db, "users", userEmail), {
    process: true,
  });

  let subs = {
    sub01: setSub01(data),
    sub02: setSub02(data),
    sub03: setSub03(data),
    sub04: setSub04(data),
    sub05: setSub05(data),
    sub06: setSub06(data),
    sub09: setSub09(data),
    sub10: setSub10(data),
  };

  await setDoc(
    subsRef,
    {
      ...subs,
    },
    { merge: true }
  );
  console.log("subs procesados y guardados");
}
