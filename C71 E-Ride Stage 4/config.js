import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDkT5H9i03hmdqgSgjZSIPR8Y6uS5uKNqA",
    authDomain: "e-ride-app-c26aa.firebaseapp.com",
    projectId: "e-ride-app-c26aa",
    storageBucket: "e-ride-app-c26aa.appspot.com",
    messagingSenderId: "940340026734",
    appId: "1:940340026734:web:6b4b5f509abf5a75f7357f"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
