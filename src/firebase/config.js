import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB4BCViWy-UG0Bhb59TFgf9u_vDHktBPTI",
  authDomain: "project-management-9f607.firebaseapp.com",
  projectId: "project-management-9f607",
  storageBucket: "project-management-9f607.appspot.com",
  messagingSenderId: "883740056268",
  appId: "1:883740056268:web:47ed635f90c490abc24069",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };
