import {db} from "../firebaseConfig";
import {collection,getDocs,query,where} from "firebase/firestore";

export default async function(){
    const collectionRef = collection(db,'products');
    const filtrarActivos = query(collectionRef,where("active","==", true));
    const snaps = await getDocs(filtrarActivos);
    const productos = [];
    for await (const snap of snaps.docs){
        const producto = snap.data();
        producto.id = snap.id;
        const preciosSnaps = await(getDocs(collection(snap.ref,"prices")));
        producto.price = preciosSnaps.docs[0].data();
        productos.push(producto);
    }
return productos;
}

