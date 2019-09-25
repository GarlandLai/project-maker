  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';

  // Your web app's Firebase configuration
  var config = {
    apiKey: "AIzaSyAeKJn4AEezdQ6AxhSvsm4LVYKLPOB4VP0",
    authDomain: "project-creator-net-ninja.firebaseapp.com",
    databaseURL: "https://project-creator-net-ninja.firebaseio.com",
    projectId: "project-creator-net-ninja",
    storageBucket: "",
    messagingSenderId: "485361454740",
    appId: "1:485361454740:web:c6004e62d413ec1a5b6e81",
    measurementId: "G-H880G561YF"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;