import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDeD1NvPHkFOYmGgopthAWhYhkngrKiVRM',
  authDomain: 'event-app-98f7d.firebaseapp.com',
  projectId: 'event-app-98f7d',
  storageBucket: 'event-app-98f7d.appspot.com',
  messagingSenderId: '225242924001',
  appId: '1:225242924001:web:a05b5cb82a6b676e7048a0',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { db, auth };
