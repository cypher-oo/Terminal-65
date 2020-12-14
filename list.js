
const firebaseConfig = {
    apiKey: "AIzaSyAQBgM9AFU9QB1F0h8O8aY2J0xHEoc6jV8",
    authDomain: "terminal65-8ac1a.firebaseapp.com",
    databaseURL: "https://terminal65-8ac1a-default-rtdb.firebaseio.com",
    projectId: "terminal65-8ac1a",
    storageBucket: "terminal65-8ac1a.appspot.com",
    messagingSenderId: "82005650969",
    appId: "1:82005650969:web:da04d479397228ea38c488"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
var database = firebase.database();
function writeUserData(userId, name, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }