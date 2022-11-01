import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCygLXgzqv6-sz2vrY-hVMV8G_zAmL1wK8",
  authDomain: "ulima-a778e.firebaseapp.com",
  projectId: "ulima-a778e",
  storageBucket: "ulima-a778e.appspot.com",
  messagingSenderId: "912586945971",
  appId: "1:912586945971:web:1a5bb139802dde10db47c6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export { auth };
