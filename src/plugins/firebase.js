import firebase from "firebase";
import config from "@/plugins/firebase-config";

const app = firebase.initializeApp(config);
const database = app.firestore();

export default database;
