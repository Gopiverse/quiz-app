import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9XJ-vjp7sFzGlXq4rcTS28EhxguT1if0",
  authDomain: "eytee27-gecbh.firebaseapp.com",
  projectId: "eytee27-gecbh",
  storageBucket: "eytee27-gecbh.firebasestorage.app",
  messagingSenderId: "294515106263",
  appId: "1:294515106263:web:0cd00988af54a547df6b92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function updateUserProfile(user) {
    const name = user.displayName;
    const email = user.email;
    const uid = user.uid;
    document.getElementById('userName').textContent = name;
       
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        updateUserProfile(user);
        const uid = user.id;
        return uid;
    } else {
        alert("Create account and login");
    }
});

