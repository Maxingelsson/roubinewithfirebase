// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCuFqTOxGPHZXjxiFqcfbRKV9cjLF6DKmY',
  authDomain: 'roubine-effd8.firebaseapp.com',
  projectId: 'roubine-effd8',
  storageBucket: 'roubine-effd8.appspot.com',
  messagingSenderId: '76622542301',
  appId: '1:76622542301:web:52589f5e56ecbce3cd3234',
  measurementId: 'G-Y45R3FEY4Y',
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

//database access variable
const db = app.firestore();

//authentication variable
const auth = firebase.auth();

export { db, auth };
