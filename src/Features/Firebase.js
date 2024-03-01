import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBD7LWlv4GGCboSw3fPglrCj6OYKv_icE4',
    authDomain: 'linkedin-clone-3b56e.firebaseapp.com',
    projectId: 'linkedin-clone-3b56e',
    storageBucket: 'linkedin-clone-3b56e.appspot.com',
    messagingSenderId: '1061739877151',
    appId: '1:1061739877151:web:3d08bec5c805c734f6d62a',
    measurementId: 'G-DWHQEZ3ETL',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth, db };
