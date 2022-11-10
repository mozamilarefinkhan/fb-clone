import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBuIva79qvETBC3u0I9_g5aS-KFvInLtx4",
  authDomain: "fb-clone-hy-d0e67.firebaseapp.com",
  projectId: "fb-clone-hy-d0e67",
  storageBucket: "fb-clone-hy-d0e67.appspot.com",
  messagingSenderId: "805420089390",
  appId: "1:805420089390:web:968fdb47274003c88d1fbf"
});
  const auth = firebase.auth();
  const provider = new firebase.auth.FacebookAuthProvider();

  const db = firebaseConfig.firestore();
  const storage = firebase.storage();

  export { auth, provider, db, storage }