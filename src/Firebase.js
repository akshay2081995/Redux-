import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZNgqLbx2QWVVznV7-YymM24HM1mormYU",
  authDomain: "loginwith-d61cc.firebaseapp.com",
  projectId: "loginwith-d61cc",
  storageBucket: "loginwith-d61cc.appspot.com",
  messagingSenderId: "50558646234",
  appId: "1:50558646234:web:3118659bf4257523baf2e3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
