import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, signOut } from "firebase/auth";
import firebaseConfig from './firebase.Config';

// firebase initialize
initializeApp(firebaseConfig);

const auth = getAuth();

// google Sign In With Popup
export const handleGoogleSignIn = () => {
  const googleProvider = new GoogleAuthProvider();
  return signInWithPopup(auth, googleProvider)
    .then(res => loginUserInfo(res.user))
    .catch((error) => errorInfo(error));
};


// createUserInEmailAndPassword
export const createUserInEmailAndPassword = (name, email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      const newUserInfo = res.user;
      newUserInfo.error = "";
      newUserInfo.success = true;
      newUserInfo.name = name;
      updateUserName(name);
      console.log(newUserInfo);
      return newUserInfo;

    })
    .catch((error) => errorInfo(error));
}

// signInUserWithEmailAndPassword
export const signInUserWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      const newUserInfo = res.user;
      newUserInfo.error = "";
      newUserInfo.photo = "";
      newUserInfo.name = res.user.displayName;
      newUserInfo.success = true;
      return newUserInfo;
    })
    .catch((error) => errorInfo(error));
}

// sign out
export const handleSignOut = () => {
  return signOut(auth)
    .then(() => {
      const signedOutUser = {
        isSignedIn: false,
        success: false,
      }
      return signedOutUser;
    })
    .catch((error) => errorInfo(error));
}

// updateuser name
const updateUserName = (name) => {
  updateProfile(auth.currentUser, {
    displayName: name
  })
};

// collectiong LoginUser Success Info
const loginUserInfo = (result) => {
  const { displayName, photoURL, email } = result;
  const signedInUser = {
    isSignedIn: true,
    error: "",
    success: true,
    name: displayName,
    email: email,
    photo: photoURL
  }
  return signedInUser;
};

// Collecting All Error Info
const errorInfo = (error) => {
  const newUserInfo = {};
  newUserInfo.errorStatus = error.message;
  newUserInfo.error = "Please Type Correct Password and Email";
  newUserInfo.success = false;
  return newUserInfo;
};