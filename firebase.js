// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore"; // Importar Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDk5GIqGihIwh6k8TcSP86GkcO-kghx-OM",
    authDomain: "newsletter-jesty.firebaseapp.com",
    projectId: "newsletter-jesty",
    storageBucket: "newsletter-jesty.appspot.com",
    messagingSenderId: "1052685009173",
    appId: "1:1052685009173:web:bf97b1f96adb77379fa91c",
    measurementId: "G-FWFL96CKDM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Inicializar Firestore

// Función para guardar correos electrónicos
export const guardarCorreo = async (email) => {
    try {
        addDoc(collection(db, "emails"), {
            email: email,
            timestamp: new Date()
        });
        console.log("Correo guardado con ID: ", );
    } catch (e) {
        console.error("Error añadiendo el documento: ", e);
    }
};

export default app; // Exportar la app para su uso en otros componentes
