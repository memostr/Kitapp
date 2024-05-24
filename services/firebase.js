// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZu_6F4wI07DEWYbo8RHmTUPqHMdclZOc",
  authDomain: "book-ecommerce-5d1c9.firebaseapp.com",
  projectId: "book-ecommerce-5d1c9",
  storageBucket: "book-ecommerce-5d1c9.appspot.com",
  messagingSenderId: "748220799077",
  appId: "1:748220799077:web:4f49ee9042c93634578e8c",
  measurementId: "G-NRXQ1BSZQP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, signInWithEmailAndPassword, createUserWithEmailAndPassword, doc, setDoc };


export const register = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    const userDoc = doc(db, "users", user.uid);
    await setDoc(userDoc, {
      email: user.email,
      uid: user.uid,
    });
    return user;
  };
  
  export const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      return user;
    } catch (error) {
      console.log(error);
    }
  };

 