import app from 'firebase/app';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAV9qoYQwtefIneda6gdRpmTWK7B94Z0vQ",
    authDomain: "style-box-2bb7a.firebaseapp.com",
    databaseURL: "https://style-box-2bb7a.firebaseio.com",
    projectId: "style-box-2bb7a",
    storageBucket: "style-box-2bb7a.appspot.com",
    messagingSenderId: "162076225904"
};

app.initializeApp(config);

export default app;