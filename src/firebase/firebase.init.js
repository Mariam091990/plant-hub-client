// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB2S_Ti6KG4TRD7Wcy5StKjObKwU6r57I",
  authDomain: "plant-hub-app.firebaseapp.com",
  projectId: "plant-hub-app",
  storageBucket: "plant-hub-app.firebasestorage.app",
  messagingSenderId: "459222218890",
  appId: "1:459222218890:web:b17ec62a32416c5fd99573"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
 export default app;