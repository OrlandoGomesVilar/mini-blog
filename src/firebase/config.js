
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD0MNXni9BFpkRdT0sWTSzi2DnfH5CgwjI",
  authDomain: "miniblog-858bd.firebaseapp.com",
  projectId: "miniblog-858bd",
  storageBucket: "miniblog-858bd.appspot.com",
  messagingSenderId: "225428318735",
  appId: "1:225428318735:web:10a4474da13e2caa7c917a"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};