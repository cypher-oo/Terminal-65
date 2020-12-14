
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
  
    var responseRef = firebase.database().ref('enquiry')
  document.getElementById('contact').addEventListener('submit',submitForm);
  function submitForm(e){
    e.preventDefault();
    var Name = document.getElementById("Name").value;
    var email = document.getElementById('inputEmail4').value;
    var number = document.getElementById('contactNumber').value;
    var state = document.getElementById('state').value;
    var venue =document.getElementById('venue').value;
    console.log(Name)
  
        //save response to db
      saveResponse(Name,email,number,state,venue)
      
       // Show alert
   
  

  }
  
  // save response to firebase 
  function saveResponse(Name, email,number,state,venue){
      var newResponseRef = responseRef.push();
      newResponseRef.set({
          Name:Name,
          email:email,
          number:number,
          state:state,
          venue:venue,
      })
  }
  