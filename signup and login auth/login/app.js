import { auth ,signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged} from "../firebase.js";
const provider = new GoogleAuthProvider();
let email = document.getElementById('email')
let password = document.getElementById('password')
let loginBtn = document.getElementById('loginBtn')
let googleBtn = document.getElementById('googleBtn')
let linkSigin= document.getElementById('signuplink')


const login =()=>{
signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user; 
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    
  });
}


const goToSignUp =()=>{
    window,location.href = "../SignUp/index.html"
}

loginBtn.addEventListener("click", login)
linkSigin.addEventListener("click", goToSignUp)

const googlelogin =()=>{
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log(user);
    
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  
}



googleBtn.addEventListener("click", googlelogin)




onAuthStateChanged(auth, (user) => { 
  if (user) {
    window.location.href = "../index.html"
    }
  });
  