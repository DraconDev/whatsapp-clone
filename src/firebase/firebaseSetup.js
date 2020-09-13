//? npm i firebase

import firebaseConfig from "./firebaseConfig";
// import * as firebase from "firebase";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


//? Init App w Key
const firebaseApp = firebase.initializeApp(firebaseConfig);

//? real Time DB
const db = firebaseApp.firestore();

//? Firebase auth
const auth = firebase.auth();

//? Google login
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
