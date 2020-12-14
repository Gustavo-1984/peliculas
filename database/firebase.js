import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBoCSoWd0oMuuFjfpNFCUFEZlx-cI2MQ3o",
  authDomain: "movies-8a188.firebaseapp.com",
  projectId: "movies-8a188",
  storageBucket: "movies-8a188.appspot.com",
  messagingSenderId: "487023902306",
  appId: "1:487023902306:web:91efdef86b482d203e1b3b",
  measurementId: "G-9RJMW33GNF"
};
  // Initialize Firebase
 export default firebase.initializeApp(firebaseConfig);
