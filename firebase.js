import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDzwg3eLyEkr3xgHvndgU6KBF8iLooYt5w",
  authDomain: "disney-plus-83f50.firebaseapp.com",
  projectId: "disney-plus-83f50",
  storageBucket: "disney-plus-83f50.appspot.com",
  messagingSenderId: "542310692060",
  appId: "1:542310692060:web:ecb5bf0f7379ace34f3019"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
