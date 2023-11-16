// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getFirestore, setDoc, getDocs, doc, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
//import { getDefaultAutoSelectFamily } from "net";
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBgGXJoqe-stLcxVS7uERM6l3SOtu1Ez5Y",
    authDomain: "gera-6e9ee.firebaseapp.com",
    projectId: "gera-6e9ee",
    storageBucket: "gera-6e9ee.appspot.com",
    messagingSenderId: "331888265233",
    appId: "1:331888265233:web:22f3ec6417d6b8ff3a49b0"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const collectionName = "users"; // Specify the collection name where you want to store user data
const db = getFirestore(app);
const colRef = collection(db, collectionName);


const siteButton = document.getElementById("save-site")


siteButton.addEventListener("click", () => {
    const nameInput = document.getElementById("site-name-input").value
    const refInput = document.getElementById("site-ref-input").value

auth.onAuthStateChanged((user) => {
    if(user){
    const userId = user.uid;
    const userRef = doc(db, collectionName, userId);
    
    addDoc(collection(userRef, "sites"), {
        Name: nameInput,
        Ref: refInput,
      })
        .then((docRef) => {
            const siteId  = docRef.id;
            console.log("site added succesfuly ",siteId);
        })
    }
    })
})