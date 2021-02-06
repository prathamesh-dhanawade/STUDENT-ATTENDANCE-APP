import * as firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHYWlPq19L8k_NDDv_n4QX8Bt1jL7gHmw",
  authDomain: "school-attendence-app-12087.firebaseapp.com",
  databaseURL: "https://school-attendence-app-12087-default-rtdb.firebaseio.com",
  projectId: "school-attendence-app-12087",
  storageBucket: "school-attendence-app-12087.appspot.com",
  messagingSenderId: "245776605800",
  appId: "1:245776605800:web:be163327d3657cb3be91dd",
  measurementId: "G-00VKVN0V5N"
};


if(firebase.apps.length===0)
firebase.initializeApp(firebaseConfig)


export const db = firebase.database();
 