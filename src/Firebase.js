import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "",
  authDomain: "iown-3e268.firebaseapp.com",
  databaseURL: "https://iown-3e268.firebaseio.com",
  projectId: "iown-3e268",
  storageBucket: "",
  messagingSenderId: "",
  appId: "1::web:"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
