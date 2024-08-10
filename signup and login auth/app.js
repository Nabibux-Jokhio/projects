import { auth, signOut , onAuthStateChanged } from "../firebase.js";
let logoutbtn = document.getElementById('logoutBtn')

const logout = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });

}

logoutbtn.addEventListener("click", logout)

onAuthStateChanged(auth, (user) => {
    if (!user) {
     window.location.href = "../login/index.html"
    }
  });