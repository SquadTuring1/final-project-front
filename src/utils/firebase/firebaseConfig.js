import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

if (!firebase.app.length) {
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export const auth = firebase.auth();

// Google provider

export const signInWithGoogle = () => {
  const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithPopup(GoogleAuthProvider);
};

// Auth with  Email and Password

export const signInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

export const signUpWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// Password recover

export const sendPasswordResetEmail = (email) =>
  auth.sendPasswordResetEmail(email);

//  Sign out

export const signOut = () => auth.signOut();

//  Current user token
export const getCurrentToken = () =>
  !auth.currentUser ? null : auth.currentUser.getIdToken();

// Currnet user email
export const getCurrentUserEmail = () =>
  !auth.currentUser ? null : auth.currentUser.email;
