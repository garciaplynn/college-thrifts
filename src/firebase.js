// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';
// If you are using v7 or any earlier
// version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD2-HqvkCbPUkGLPcZOrpyBKJg4E1mIqs4',
  authDomain: 'college-thrifts.firebaseapp.com',
  databaseURL: 'https://college-thrifts-default-rtdb.firebaseio.com',
  projectId: 'college-thrifts',
  storageBucket: 'college-thrifts.appspot.com',
  messagingSenderId: '257256089519',
  appId: '1:257256089519:web:194f709f444eed4b6d715a',
  measurementId: 'G-1VBM4RM6EK',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
