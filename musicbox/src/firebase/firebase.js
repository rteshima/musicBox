import firebase from 'firebase/app'
import 'firebase/storage'

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAPEHigBAlUi8kkPkiY_He2jIdOMM4XAOk",
    authDomain: "musicbox-c9dc9.firebaseapp.com",
    databaseURL: "https://musicbox-c9dc9.firebaseio.com",
    projectId: "musicbox-c9dc9",
    storageBucket: "musicbox-c9dc9.appspot.com",
    messagingSenderId: "710011835030",
    appId: "1:710011835030:web:fb5909f1d02f731a0168b7",
    measurementId: "G-C2WPZ4CXQ5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage()
  //firebase.analytics();

export {
    storage, firebase as default
}