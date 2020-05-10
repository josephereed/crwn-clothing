import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyD9DYglIEUzBc5kXgkUILS8PEqOC51lKVM",
  authDomain: "crwn-db-38325.firebaseapp.com",
  databaseURL: "https://crwn-db-38325.firebaseio.com",
  projectId: "crwn-db-38325",
  storageBucket: "crwn-db-38325.appspot.com",
  messagingSenderId: "355889903943",
  appId: "1:355889903943:web:d0364df31c123c82eef462",
  measurementId: "G-V0JM1VCQS0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;