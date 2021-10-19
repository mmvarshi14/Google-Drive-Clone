// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDHm95AogFCjHo0KdIHcK7wCwc_I8Txxh8",
  authDomain: "pin-clone-5111b.firebaseapp.com",
  projectId: "pin-clone-5111b",
  storageBucket: "pin-clone-5111b.appspot.com",
  messagingSenderId: "926530066916",
  appId: "1:926530066916:web:d728940de725c8ac180ff1",
  measurementId: "G-HJ048PRB04"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth= firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage=firebase.storage()
const db=firebaseApp.firestore()

export { auth, provider, db, storage }
