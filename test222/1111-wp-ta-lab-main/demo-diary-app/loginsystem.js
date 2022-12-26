// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   deleteUser,
//   signInWithPopup,
//   GoogleAuthProvider,
// } from "firebase/auth";
// import {
//   getFirestore,
//   doc,
//   collection,
//   setDoc,
//   getDoc,
//   getDocs,
//   updateDoc,
//   deleteDoc,
// } from "firebase/firestore";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

import {
  getAuth,
  deleteUser,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  collection,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYBt9Gx0BQU25p4sz-Ex54EPXo1b9_K2w",
  authDomain: "fir-web-programing.firebaseapp.com",
  databaseURL: "https://fir-web-programing-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-web-programing",
  storageBucket: "fir-web-programing.appspot.com",
  messagingSenderId: "828209721818",
  appId: "1:828209721818:web:4a228e3f1514ea6d3390e3",
  measurementId: "G-K0TECEYRKK"
};

// Initialize Firebase

initializeApp(firebaseConfig);

const auth = getAuth();
const providerGoogle = new GoogleAuthProvider();
const db = getFirestore();

const start = () => {
  document.getElementById("login").addEventListener("click", login);
  /*
  document.getElementById("logout").addEventListener("click", logout);
  document
    .getElementById("delete-account")
    .addEventListener("click", deleteAccount);
  document.getElementById("create").addEventListener("click", createContent);
  document.getElementById("read").addEventListener("click", readContent);
  document.getElementById("update").addEventListener("click", updateContent);
  document.getElementById("delete").addEventListener("click", deleteContent);
  */
};

const login = () => {
  signInWithPopup(auth, providerGoogle)
    
    .then((result) => {
      const user = result.user;
      alert("Welcome to 富士大學堂" + user);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // console.log("credential: ", credential);
      const token = credential.accessToken;
      // console.log("token: ", token);
    
      
      console.log("user: ", user);
      console.log("userEmail: ", user.email);
      

      document.querySelector(".login").style.display = "none";
      document.querySelector(".container").style.display = "block";

    })
    .catch((error) => {
      alert("Something was wrong.");
      console.log();
      console.log("error ==================");
      const errorCode = error.code;
      console.log("errorCode: ", errorCode);
      const errorMessage = error.message;
      console.log("errorMessage: ", errorMessage);
      const email = error.email;
      console.log("email: ", email);
      const credential = GoogleAuthProvider.credentialFromError(error);
      // console.log("credential: ", credential);
    
    });
};
/*
const logout = () => {
  auth
    .signOut()
    .then(() => {
      document.querySelector(".container").style.display = "none";
      document.querySelector(".login").style.display = "block";
      alert("You've been logged out.");
    })
    .catch((error) => {
      alert("Something was wrong.");
      console.log("error: ", error);
    });
};

const deleteAccount = () => {
  const user = auth.currentUser;
  deleteUser(user)
    .then(() => {
      document.querySelector(".container").style.display = "none";
      document.querySelector(".login").style.display = "block";
      alert("亲 你号没了");
    })
    .catch((error) => {
      alert("Something was wrong.");
      console.log("error: ", error);
    });
};

const createContent = () => {
  const userEmail = auth.currentUser.email;
  const diaryTitle = document.getElementById("diary-title").value;
  const diaryContent = document.getElementById("diary-content").value;
  try {
    setDoc(doc(db, userEmail, diaryTitle), {
      timestamp: new Date(Date.now()),
      title: diaryTitle,
      content: diaryContent,
    });
    alert('Created: "' + diaryTitle + '"');
    document.getElementById("diary-title").value = "";
    document.getElementById("diary-content").value = "";
  } catch (err) {
    alert("Something was wrong.");
    console.error("Error: ", err);
  }
};

const readContent = () => {
  document.getElementById("diary-content").value = "";
  const userEmail = auth.currentUser.email;
  const diaryTitle = document.getElementById("diary-title").value;

  if (diaryTitle === "") {
    getDocs(collection(db, userEmail)).then((querySnapshot) => {
      if (querySnapshot.length === 0) {
        alert("no content yet.");
        return;
      }
      querySnapshot.forEach((doc) => {
        console.log(doc.id, doc.data().content);
        document.getElementById("diary-content").value += doc.id;
        document.getElementById("diary-content").value += ":\n";
        document.getElementById("diary-content").value += doc.data().content;
        document.getElementById("diary-content").value += "\n\n\n";
      });
    });
  } else {
    getDoc(doc(db, userEmail, diaryTitle)).then((docSnap) => {
      if (docSnap.exists()) {
        console.log("diary content: ", docSnap.data());
        document.getElementById("diary-content").value = docSnap.data().content;
      } else {
        alert("no such data.");
      }
    });
  }
};

const updateContent = () => {
  const userEmail = auth.currentUser.email;
  const diaryTitle = document.getElementById("diary-title").value;
  const diaryContent = document.getElementById("diary-content").value;
  try {
    updateDoc(doc(db, userEmail, diaryTitle), {
      timestamp: new Date(Date.now()),
      title: diaryTitle,
      content: diaryContent,
    });
    alert('Updated: "' + diaryTitle + '"');
    document.getElementById("diary-title").value = "";
    document.getElementById("diary-content").value = "";
  } catch (err) {
    alert("Something was wrong.");
    console.error("Error: ", err);
  }
};

const deleteContent = () => {
  const userEmail = auth.currentUser.email;
  const diaryTitle = document.getElementById("diary-title").value;
  deleteDoc(doc(db, userEmail, diaryTitle));
  alert('Deleted: "' + diaryTitle + '"');
  document.getElementById("diary-title").value = "";
  document.getElementById("diary-content").value = "";
};
*/

window.addEventListener("load", start,false);
