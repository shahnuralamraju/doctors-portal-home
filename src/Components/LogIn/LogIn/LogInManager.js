import "firebase/auth";
import firebase from "firebase/app";
import firebaseConfig from './firebase.Config';
export const initializeLoginFramework = () => {
  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
}

// google Sign In With Popup
export const handleGoogleSignIn = () => {
  const googleprovider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(googleprovider)
    .then(res => loginUserInfo(res.user))
    .catch((error) => errorInfo(error));
};


// createUserInEmailAndPassword
export const createUserInEmailAndPassword = (name, email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
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
  return firebase.auth().signInWithEmailAndPassword(email, password)
    .then((res) => {
      const newUserInfo = res.user;
      newUserInfo.error = "";
      newUserInfo.name = res.user.displayName;
      newUserInfo.success = true;
      return newUserInfo;
    })
    .catch((error) => errorInfo(error));
}

// sign out
export const handleSignOut = () => {
  return firebase.auth().signOut()
    .then(() => {
      const signedOutUser = {
        isSignedIn: false,
        success: false,
        name: '',
        email: '',
        photo: ''
      }
      return signedOutUser;
    })
    .catch((error) => errorInfo(error));
}

// updateuser name
const updateUserName = (name) => {
  firebase.auth().currentUser
    .updateProfile({ 
        displayName: name,
    });
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
  newUserInfo.error = error.message;
  newUserInfo.success = false;
  return newUserInfo;
};