import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDgNrpff5_WiyGTNmqKAhMke81V7TFboOM",
    authDomain: "clone-1db08.firebaseapp.com",
    projectId: "clone-1db08",
    storageBucket: "clone-1db08.appspot.com",
    messagingSenderId: "393438839415",
    appId: "1:393438839415:web:465d0cccf915948a61fc72",
    measurementId: "G-77TVKM3QPK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();


  export { db, auth};
 
