import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBqhj2PWBiBHVuIsJxBWhBe_bhSS0THeFE",
  authDomain: "slack-clone-69cb8.firebaseapp.com",
  projectId: "slack-clone-69cb8",
  storageBucket: "slack-clone-69cb8.appspot.com",
  messagingSenderId: "902007151797",
  appId: "1:902007151797:web:1f9e9f0676f8ef6430b2fc"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db};