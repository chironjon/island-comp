import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC4z38SwLShrkitqEHpAPRmlwa07zxAK1E",
  authDomain: "island-comp.firebaseapp.com",
  databaseURL: "https://island-comp.firebaseio.com",
  projectId: "island-comp",
  storageBucket: "island-comp.appspot.com",
  messagingSenderId: "778780234762",
  appId: "1:778780234762:web:4445ba7df5c667975fbbf3",
  measurementId: "G-EZ1D58E2JW"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;