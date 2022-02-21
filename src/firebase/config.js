import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPns6Zbc8Mv_5NCMnXSxcJB8HzcFenka4",
  authDomain: "crud-react-6343f.firebaseapp.com",
  projectId: "crud-react-6343f",
  storageBucket: "crud-react-6343f.appspot.com",
  messagingSenderId: "202553843740",
  appId: "1:202553843740:web:b42e1d59eba30e3371bfd9"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {firebase,db, googleAuthProvider}