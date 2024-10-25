// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqEh6siSFSAqt9VMNQsLYqe32UQfHGzZM",
  authDomain: "library-react-49505.firebaseapp.com",
  projectId: "library-react-49505",
  storageBucket: "library-react-49505.appspot.com",
  messagingSenderId: "481130172436",
  appId: "1:481130172436:web:68f1e73048f3291d135701",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ticketCollection = collection(db, 'ticket')
const pengunjungCollection = collection(db, 'pengunjung')

export { ticketCollection, pengunjungCollection };
