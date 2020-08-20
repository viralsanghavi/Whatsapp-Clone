import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCzcI9xL3MCA3BE5oS1xcVj7CIvSCNmavo",
    authDomain: "whatsapp-clone-729eb.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-729eb.firebaseio.com",
    projectId: "whatsapp-clone-729eb",
    storageBucket: "whatsapp-clone-729eb.appspot.com",
    messagingSenderId: "488830236831",
    appId: "1:488830236831:web:2f2fd6ce7b374695e2caaa",
    measurementId: "G-Q99V6CX2GL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
export { auth, provider }
export default db