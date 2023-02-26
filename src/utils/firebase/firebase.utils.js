import { initializeApp } from "firebase/app";
import { 
  GoogleAuthProvider,
  getAuth,
  signInWithPopup 
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDKQu9WMDqhNyFo-Yf0jHkal-5ULyxBw3k",
    authDomain: "crown-clothing-db-4b8b2.firebaseapp.com",
    projectId: "crown-clothing-db-4b8b2",
    storageBucket: "crown-clothing-db-4b8b2.appspot.com",
    messagingSenderId: "634340992343",
    appId: "1:634340992343:web:c8434b170540802996ca12"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //Initilazie Google provider
  const provider = new GoogleAuthProvider();

  //Seting parametars for Google provider
  provider.setCustomParameters({
    prompt: "select_account"
  });

  //Initilaze Authification
  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  //Initailaze DataBase
  export const db = getFirestore(); 

  //
  export const createUserDocumentFromAuth = async (userAuth) => {
    
    const userDocRef = doc(db,"users",userAuth.uid);
    
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt
        })
      } catch(error){
        console.log("error creating the user", error.messange);
      }
    }

    
    return userDocRef;

  };
  