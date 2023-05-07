import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

async function loginEmail(email, password) {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result;
}

export default loginEmail;