import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwA7cLn96qp5ERkgZibSSIoHPrTb-WH7c",
  authDomain: "king-clothing-df3e5.firebaseapp.com",
  projectId: "king-clothing-df3e5",
  storageBucket: "king-clothing-df3e5.appspot.com",
  messagingSenderId: "457668372927",
  appId: "1:457668372927:web:6c986ee951de2538da590a",
  measurementId: "G-Y5CS0LL32Z",
};

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
        ...additionalData,
      });
    } catch (error) {
      console.log("error created by user", error.message);
    }
  }
  return userRef;
};

export const convertCollectionToSnapshotMap = (collection) => {
  const transformedCollection = collection.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

 return transformedCollection.reduce((accumulatedCollection, collection)=>
  { accumulatedCollection[collection.title.toLowerCase()]= collection;
  
  return accumulatedCollection;}
 ,{})
};

export const addCollectionsAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => { /*obj apa for each krke pass krya, obj accumulator jive reduce ch hunda ove km krda, mtlb count hunda renda, 0 to shuru hunda*/
    const newDocumentRef = collectionRef.doc();

    batch.set(newDocumentRef, obj);
  });

  return await batch.commit();
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
