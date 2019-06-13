import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyBAqFWnpJSEAk63EmNhDIyTafBBeZQXJJs",
    authDomain: "myfamilyportal-75edf.firebaseapp.com",
    databaseURL: "https://myfamilyportal-75edf.firebaseio.com",
    projectId: "myfamilyportal-75edf",
    storageBucket: "myfamilyportal-75edf.appspot.com",
    messagingSenderId: "319317252997",
    appId: "1:319317252997:web:be36b6ff4dbdffb0"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots:true});

export default firebase;