import firebase from 'firebase/app';

import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyASu7Yl8UZrO25_4fc7qYyaOEbbmtTzEC0",
    authDomain: "commonaccord-b3aff.firebaseapp.com",
    databaseURL: "https://commonaccord-b3aff-default-rtdb.firebaseio.com",
    projectId: "commonaccord-b3aff",
    storageBucket: "commonaccord-b3aff.appspot.com",
    messagingSenderId: "5967937073",
    appId: "1:5967937073:web:423e1efadbe4f7d96b9f10",
    measurementId: "G-57QY7L971G"
  };

firebase.initializeApp(firebaseConfig);

export { firebase };