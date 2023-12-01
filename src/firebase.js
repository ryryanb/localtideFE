// Import necessary Firebase modules
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; // Add this import statement

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfbm6zMUTTEAT-R-33Iy-DGht94yGn5H4",
  authDomain: "localtide-firebase-8f647.firebaseapp.com",
  projectId: "localtide-firebase-8f647",
  storageBucket: "localtide-firebase-8f647.appspot.com",
  messagingSenderId: "925909487006",
  appId: "1:925909487006:web:d7553c7cc939b622f75a8f",
  measurementId: "G-70GM3Y829K"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

// Get Firestore instance
const firestore = getFirestore(firebaseApp);

export { auth, firestore };
