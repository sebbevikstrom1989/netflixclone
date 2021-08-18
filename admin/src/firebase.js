import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDYy6FNu7rRl0_z5-NZmWrWnZwt1Z9aVzg",
  authDomain: "netflix-53d5b.firebaseapp.com",
  projectId: "netflix-53d5b",
  storageBucket: "netflix-53d5b.appspot.com",
  messagingSenderId: "379813639263",
  appId: "1:379813639263:web:b175067b59e84ed62ed7ea",
  measurementId: "G-X77G4SFVK0",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export default storage;
