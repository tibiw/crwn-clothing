import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBX7qtQZyN1fQp1b5s_fxQyr6rnmtUsBKo",
    authDomain: "crwn-db-d0c1c.firebaseapp.com",
    databaseURL: "https://crwn-db-d0c1c.firebaseio.com",
    projectId: "crwn-db-d0c1c",
    storageBucket: "crwn-db-d0c1c.appspot.com",
    messagingSenderId: "1013245371714",
    appId: "1:1013245371714:web:979ed283af122a26ef14db"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
