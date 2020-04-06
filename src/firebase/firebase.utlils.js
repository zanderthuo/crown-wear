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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    // console.log(snapShot);

    //checking if there is any data of the user
    //if not create new user
    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error){
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};


export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
  ) => {
    const collectionRef = firestore.collection(collectionKey);
    // console.log(collectionRef);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
    //   console.log(newDocRef);
      batch.set(newDocRef, obj);
    });
  
    return await batch.commit();
  };

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//gogle authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;