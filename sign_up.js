 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
 import { getAuth, signInWithEmailAndPassword , createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBJikEwTxi4PTYQAsvwjrbNdrOEy8qAxQQ",
   authDomain: "health-1e03d.firebaseapp.com",
   projectId: "health-1e03d",
   storageBucket: "health-1e03d.appspot.com",
   messagingSenderId: "299920413260",
   appId: "1:299920413260:web:60df3093b890b849ad9ae9"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth();

 document.getElementById("signUp").addEventListener('click',function(){


    const loginemail=document.getElementById("email").value;
    const loginpassword=document.getElementById("password").value;
    createUserWithEmailAndPassword(auth, loginemail, loginpassword)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("user");
      alert("Signed Up succesfully");
      console.log("User is registered successfully");
      document.querySelector('a').click();
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Email id not valid to register OR already registered");
      console.log("sosorry");
    });
 });




 document.getElementById("signIn").addEventListener('click',function(){


    const loginemail=document.getElementById("email").value;
    const loginpassword=document.getElementById("password").value;
    signInWithEmailAndPassword(auth, loginemail, loginpassword)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("user");
      alert("Signed In succesfully");
      document.querySelector("a").click();
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("sosorry");
      alert("Not valid email id");
    });
 });
