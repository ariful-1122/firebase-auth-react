import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6U2nTLBAPMVYBu6vf4pMt5MmwFjkOdRw",
  authDomain: "auth-development-9233f.firebaseapp.com",
  projectId: "auth-development-9233f",
  storageBucket: "auth-development-9233f.appspot.com",
  messagingSenderId: "915389766135",
  appId: "1:915389766135:web:2267292be788ab7019f6f2",
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();

export default app;
