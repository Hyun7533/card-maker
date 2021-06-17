import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAiVJEfG171qSheODlFVlO7w9jXJ5mMh0Q",
    authDomain: "business-card-maker-7f467.firebaseapp.com",
    projectId: "business-card-maker-7f467",
    storageBucket: "business-card-maker-7f467.appspot.com",
    messagingSenderId: "583630068901",
    appId: "1:583630068901:web:08001788f3940a7f52014c",
    measurementId: "G-MYLF4ZT9D7"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;