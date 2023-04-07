// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB_wjbQZdHCc5Mldgd2V0POPNzRtWKpsjY",
    authDomain: "prayers2-e01b3.firebaseapp.com",
    projectId: "prayers2-e01b3",
    storageBucket: "prayers2-e01b3.appspot.com",
    messagingSenderId: "978468151358",
    appId: "1:978468151358:web:11f349c126134e469c316f",
    measurementId: "G-M11PCVBDQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);