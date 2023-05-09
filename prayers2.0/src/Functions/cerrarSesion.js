import { auth } from "../firebaseConfig";
import {signOut} from "firebase/auth";

function cerrarSesion(){
    signOut(auth);
}
export default cerrarSesion;