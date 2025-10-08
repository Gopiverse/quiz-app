import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";



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
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();
const googleSignIn = document.getElementById('googleLogin');
googleSignIn.addEventListener('click', () => {
    signInWithPopup(auth, provider) 
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        const email = user.email;

        if (email.endsWith("@gecbh.ac.in")) {
            console.log("Authorized user:", email);
            setTimeout(() => {
                window.location.href = "logged.html";
            }, 2000);
        } else {
            alert("Access denies. Please use College mail id");
            auth.signOut();
        }
         
    }) .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
    });
});

