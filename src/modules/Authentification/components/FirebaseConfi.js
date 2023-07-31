import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfi = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    messagingSenderId: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    appId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    measurementId: process.env.REACT_APP_FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfi);
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

export {auth, provider };
