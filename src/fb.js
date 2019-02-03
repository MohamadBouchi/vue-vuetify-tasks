import firebase from 'firebase/app';
import 'firebase/firestore';

// Initialize Firebas
var config = {
    apiKey: `"${process.env.APIKEY}"`,
    authDomain: `"${process.env.AUTH_DOMAIN}"`,
    databaseURL: `"${process.env.DATABASE_URL}"`,
    projectId: `"${process.env.PROJECT_ID}"`,
    storageBucket: `"${process.env.STORAGE_BUCKET}"`,
    messagingSenderId: `"${process.env.SENDER_ID}"`
  };
firebase.initializeApp(config);

const db = firebase.firestore();

//db.settings({ timestampsInSnapshots: true });

export default db;

