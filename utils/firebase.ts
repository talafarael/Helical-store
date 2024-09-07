import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCEtgLNJIJNISjUXq85XVMxl0vhSsW3HEg",
  authDomain: "fara-19074.firebaseapp.com",
  projectId: "fara-19074",
  storageBucket: "fara-19074.appspot.com",
  messagingSenderId: "694491181371",
  appId: "1:694491181371:web:609be1d019527d9082c71e",
  measurementId: "G-82BH5TM17K",
};
const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
