// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCqEh6siSFSAqt9VMNQsLYqe32UQfHGzZM",
//   authDomain: "library-react-49505.firebaseapp.com",
//   projectId: "library-react-49505",
//   storageBucket: "library-react-49505.appspot.com",
//   messagingSenderId: "481130172436",
//   appId: "1:481130172436:web:68f1e73048f3291d135701",
// };

const firebaseConfig = {
  apiKey: "AIzaSyCnWUtS_7lS_cV63PgIxTWOt-VwfKTfuxc",
  projectId: "store-7c37e",
  storageBucket: "store-7c37e.appspot.com",
  messagingSenderId: "481088485419",
  appId: "1:481088485419:web:7aa80c540b92579727d26e",
  measurementId: "G-R89SPG7FSK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ticketCollection = collection(db, "ticket");
const pengunjungCollection = collection(db, "pengunjung");

export { ticketCollection, pengunjungCollection };
