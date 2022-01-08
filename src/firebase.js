// note: imports altered to migrate to v9 compat packages
// https://stackoverflow.com/questions/68929593/vue-2-export-default-imported-as-firebase-was-not-found-in-firebase-app
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyATBXhjeoor5oMZkBnf4AuqyrhHRAeSxpI",
  authDomain: "vue-2-walkie-talkie.firebaseapp.com",
  projectId: "vue-2-walkie-talkie",
  storageBucket: "vue-2-walkie-talkie.appspot.com",
  messagingSenderId: "198883079058",
  appId: "1:198883079058:web:d7febdc004485ee097474b"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();



