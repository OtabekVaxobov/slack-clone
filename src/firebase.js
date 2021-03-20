import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyASSKKLWi-kp0tR0bLICjpVHMs99QEPU3o",
    authDomain: "slack-clone-24da6.firebaseapp.com",
    projectId: "slack-clone-24da6",
    storageBucket: "slack-clone-24da6.appspot.com",
    messagingSenderId: "310682322091",
    appId: "1:310682322091:web:643708626b8f12211763ee"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

   export { auth, provider, db };