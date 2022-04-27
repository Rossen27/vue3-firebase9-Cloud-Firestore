import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
const firebaseConfig = {
    //USE YOUR CREDENTIALS HERE, i AM GOING TO DELETE THESE
    apiKey: "AIzaSyCpdpXyb2AoHWDUq9MYBc7AxBAq7EUjKJo",
    authDomain: "vue-firebase-authenticat-a023c.firebaseapp.com",
    databaseURL: "https://vue-firebase-authenticat-a023c-default-rtdb.firebaseio.com",
    projectId: "vue-firebase-authenticat-a023c",
    storageBucket: "vue-firebase-authenticat-a023c.appspot.com",
    messagingSenderId: "371882211424",
    appId: "1:371882211424:web:054a7dda1f14f248e7eb05"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const blogsColRef = collection(db, "blogs");
export default blogsColRef;