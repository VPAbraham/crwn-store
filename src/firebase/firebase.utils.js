import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAaM_t2Ne2WoaArl2gJgoiQYu6fHWxNgTw",
  authDomain: "crwn-db-aecfb.firebaseapp.com",
  projectId: "crwn-db-aecfb",
  storageBucket: "crwn-db-aecfb.appspot.com",
  messagingSenderId: "207242266397",
  appId: "1:207242266397:web:ee8293413301314a7203f4",
  measurementId: "G-G1MQBJ483F"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
