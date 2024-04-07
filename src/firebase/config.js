// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAtZM7Y6qNXAMahlN1IW43D0XwSYth5wHY',
  authDomain: 'march-testing-d20c8.firebaseapp.com',
  projectId: 'march-testing-d20c8',
  storageBucket: 'march-testing-d20c8.appspot.com',
  messagingSenderId: '1083829242605',
  appId: '1:1083829242605:web:d387cf83a776149e205ae4',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)

export { db }
