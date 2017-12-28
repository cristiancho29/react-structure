import firebase from 'firebase'

const config = {
    apiKey: "xxxxxxxxxx",
    authDomain: "xxxxxx",
    databaseURL: "xxxxxxx",
    storageBucket: "xxxxxx",
    messagingSenderId: "xxxx"
};
firebase.initializeApp(config);

const ref = firebase.database().ref()
const firebaseAuth = firebase.auth

export function auth (email, pw) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(saveUser)
}

export function logout () {
  return firebaseAuth().signOut()
}

export function login (email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
}

export function resetPassword (email) {
  return firebaseAuth().sendPasswordResetEmail(email)
}

export function saveUser (user) {
  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user)
}

export function verify(){
  return firebaseAuth().currentUser.getToken(true);
}