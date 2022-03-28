import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBsNzVB9UmYuFoaMolJzy9or3TS8R5CD8A",
  authDomain: "e-ride-stage---4.firebaseapp.com",
  projectId: "e-ride-stage---4",
  storageBucket: "e-ride-stage---4.appspot.com",
  messagingSenderId: "470462838403",
  appId: "1:470462838403:web:2dec738639b0bb14938db6"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
