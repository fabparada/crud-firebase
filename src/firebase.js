  import firebase from 'firebase/app'
  import firestore from 'firebase/firestore'

  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBz2U_QAoI1kSJDRRp7kvu46aSiaTGn9PU",
    authDomain: "crud-firebase-4094d.firebaseapp.com",
    databaseURL: "https://crud-firebase-4094d.firebaseio.com",
    projectId: "crud-firebase-4094d",
    storageBucket: "crud-firebase-4094d.appspot.com",
    messagingSenderId: "230715459898",
    appId: "1:230715459898:web:b8ebc463a2577104c0a803"
  };
  // Initialize Firebase

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  firebaseApp.firestore().settings({timestampsInSnapshots: true})
  export default firebaseApp.firestore();