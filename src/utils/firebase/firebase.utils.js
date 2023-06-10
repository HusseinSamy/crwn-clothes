import { initializeApp } from "firebase/app";
import env from "../../evironment/variables.environment";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
const {
  apiKey ,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId ,
  appId
} = env;
  
const firebaseConfig = {
  apiKey ,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId   
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const siginInWithGooglePopup = ()=> signInWithPopup(auth, provider)