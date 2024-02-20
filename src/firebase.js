// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth" //인증 기능을 사용할 것이기 때문에 별도로 추가할 것
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoUW4r0321TD4Wgwu47IjtreIIhXUXnrs",
  authDomain: "react-disney-plus-app-be954.firebaseapp.com",
  projectId: "react-disney-plus-app-be954",
  storageBucket: "react-disney-plus-app-be954.appspot.com",
  messagingSenderId: "446814636857",
  appId: "1:446814636857:web:1ae429ab3d9f2d105776e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;