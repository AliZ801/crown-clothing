import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD-_OqLnlYsBWCIX9mdBkG_rOqEzD5u76A",
    authDomain: "crown-clothing-db-40659.firebaseapp.com",
    databaseURL: "https://crown-clothing-db-40659.firebaseio.com",
    projectId: "crown-clothing-db-40659",
    storageBucket: "crown-clothing-db-40659.appspot.com",
    messagingSenderId: "952031436269",
    appId: "1:952031436269:web:3af83a4b35b787def65be4",
    measurementId: "G-BEZXB6NJXV"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;