import { auth , createUserWithEmailAndPassword , onAuthStateChanged} from "../firebase.js";

let email = document.getElementById('email')
let password = document.getElementById('password')
let signUpBtn = document.getElementById('signUpBtn')

const signUp = ()=>{
createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    
  });
email.value = ''
password.value = ''
}

signUpBtn.addEventListener("click", signUp)


onAuthStateChanged(auth, (user) => {
  if (user) {
   window.location.href = "../index.html"
  }
});
