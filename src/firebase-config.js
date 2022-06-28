import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc
} from "firebase/firestore"

// dont publish these keys on github
const firebaseConfig = {

<<<<<<< HEAD
    apiKey: "AIzaSyDerebUmW4JDL7W7r4h09OoQNayBWmV5Kw",
=======
    apiKey: "REDACTED",
>>>>>>> e5c10ba2fcacf769fafabce98d4c78eb933310ce
  
    authDomain: "speechapp-951db.firebaseapp.com",
  
    projectId: "speechapp-951db",
  
<<<<<<< HEAD
    storageBucket: "speechapp-951db.appspot.com",
  
    messagingSenderId: "830546303109",
  
    appId: "1:830546303109:web:0c3c49d4dd9030d7f2f1ec",
  
    measurementId: "G-T8KTS10PZH"
=======
    storageBucket: "REDACTED",
  
    messagingSenderId: "REDACTED",
  
    appId: "REDACTED",
  
    measurementId: "REDACTED"
>>>>>>> e5c10ba2fcacf769fafabce98d4c78eb933310ce
  
  };
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);

    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        messages: [],
      });
    }
  } catch (err) {
    console.log(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
}

export {
  auth,
  db,
  signInWithGoogle,
  logout
}
