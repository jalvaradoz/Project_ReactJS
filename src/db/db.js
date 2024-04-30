import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAmgChNMq0c117I0Ea3oFUqj7odSBgVPA0",
    authDomain: "alter-jewelry.firebaseapp.com",
    projectId: "alter-jewelry",
    storageBucket: "alter-jewelry.appspot.com",
    messagingSenderId: "261390137831",
    appId: "1:261390137831:web:b544fe60d26b5f72776542"
}

initializeApp(firebaseConfig)

const db = getFirestore()

export default db