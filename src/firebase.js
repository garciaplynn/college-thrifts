// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';
// If you are using v7 or any earlier
// version of the JS SDK, you should import firebase using namespace import
// import * as firebase from 'firebase/app'

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAv6n9hx8aB8mo86wHUn3WkwYLVzSKbaSo',
  authDomain: 'unicycle-70bb6.firebaseapp.com',
  projectId: 'unicycle-70bb6',
  storageBucket: 'unicycle-70bb6.appspot.com',
  messagingSenderId: '739570222761',
  appId: '1:739570222761:web:28f6a9e5a6956c725e4bb8',
  measurementId: 'G-QQ2F0JB3ZJ',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
