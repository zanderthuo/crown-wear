import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDzqhzxe_VVsnpmPD4OXrP8hiIIMIMzYK8",
    authDomain: "crownecommerce-8b50c.firebaseapp.com",
    databaseURL: "https://crownecommerce-8b50c.firebaseio.com",
    projectId: "crownecommerce-8b50c",
    storageBucket: "crownecommerce-8b50c.appspot.com",
    messagingSenderId: "302277827395",
    appId: "1:302277827395:web:8f8ab6d4ca032be0636df6",
    measurementId: "G-9N5HZJKSWD"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//gogle authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;