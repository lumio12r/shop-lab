import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCFP6YV3QPv_u_7C-1si_4WsCwHxLOzQwo",
    authDomain: "shop-bachelor.firebaseapp.com",
    projectId: "shop-bachelor",
    storageBucket: "shop-bachelor.appspot.com",
    messagingSenderId: "718870000054",
    appId: "1:718870000054:web:7ceca724454ddffd3ad117",
    measurementId: "G-QSS3FPB002"
};

firebase.initializeApp(config);

export const createUser = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set(
                {
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                }
            );
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;

};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const Googleprovider = new firebase.auth.GoogleAuthProvider();
Googleprovider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(Googleprovider);

const Facebookprovider = new firebase.auth.FacebookAuthProvider();
Facebookprovider.setCustomParameters({ prompt: 'select_account'});
export const signInWithFacebook = () => auth.signInWithPopup(Facebookprovider);

export default firebase;