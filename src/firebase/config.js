import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBuSrXNRlL4J_476n8_VqirpNWPH2cxjAU",
  authDomain: "cooking-ninjia-site.firebaseapp.com",
  projectId: "cooking-ninjia-site",
  storageBucket: "cooking-ninjia-site.appspot.com",
  messagingSenderId: "509040957413",
  appId: "1:509040957413:web:ed3055b9eadb47ff91c10c"
};

//init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export {projectFirestore}
