import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js'

import { firebaseConfig } from '../web/constants/firebase-config.ts';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const createFirestore = () => getFirestore(app);
