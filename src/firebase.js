import firebase from 'firebase'
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBPNHaYAFhYRFe_0IS0HjFq2Lh_8vM8K_o",
    authDomain: "assignment-fa66a.firebaseapp.com",
    projectId: "assignment-fa66a",
    storageBucket: "assignment-fa66a.appspot.com",
    messagingSenderId: "1053902430106",
    appId: "1:1053902430106:web:9995c55b7bbe9aa8ce6423"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const storage = firebase.storage();
const db = firebase.firestore();
const fs = firebase

export { auth, storage, db, fs };