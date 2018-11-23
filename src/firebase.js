import Firebase from 'firebase'

let config = {
	apiKey: "AIzaSyBIkmGs9OGhwVVxnTL6V04OV-On7Jb5Od0",
	authDomain: "tweeter-c7c21.firebaseapp.com",
	databaseURL: "https://tweeter-c7c21.firebaseio.com",
	projectId: "tweeter-c7c21",
	storageBucket: "tweeter-c7c21.appspot.com",
	messagingSenderId: "840501622345"
};
const firebaseApp = Firebase.initializeApp(config);
export default firebaseApp;