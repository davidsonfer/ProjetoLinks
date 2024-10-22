import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDS2uIOPznl4yZxkEbVlb2lmPoPEmlGejM",
  authDomain: "reactlinks-5bff2.firebaseapp.com",
  projectId: "reactlinks-5bff2",
  storageBucket: "reactlinks-5bff2.appspot.com",
  messagingSenderId: "204907868794",
  appId: "1:204907868794:web:2a203eac6d548f9b1981c3",
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export {auth, db}