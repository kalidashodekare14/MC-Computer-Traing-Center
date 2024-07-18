// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU3xbWoj_MQwVwJbcdMNhfglQtDXvXDc4",
  authDomain: "mc-computer.firebaseapp.com",
  projectId: "mc-computer",
  storageBucket: "mc-computer.appspot.com",
  messagingSenderId: "25621815611",
  appId: "1:25621815611:web:d76f6ac7a53d31e19b971e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth