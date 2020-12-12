
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

  var responseRef = firebase.database().ref('response')
document.getElementById('contact').addEventListener('submit',submitForm);
function submitForm(e){
  e.preventDefault();
  var firstname = document.getElementById("firstName").value;
  var lastname = document.getElementById("lastName").value;
  var email = document.getElementById('inputEmail4').value;
  var number = document.getElementById('contactNumber').value;
  var address = document.getElementById('inputAddress').value;
  var address1 = document.getElementById('inputAddress2').value;
  var city = document.getElementById('city').value;
  var state = document.getElementById('state').value;
  var pin = document.getElementById('pincode').value;
  var venue =document.getElementById('venue').value;
  console.log(firstname)

      //save response to db
    saveResponse(firstname, lastname, email,number,address,address1,city,state,pin,venue)
    
     // Show alert
  document.querySelector('.response').style.display = 'block';
  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.response').style.display = 'none';
  },3000); 

  // Clear form
  document.getElementById('contact').reset();
}

// save response to firebase 
function saveResponse(firstname, lastname, email,number,address,address1,city,state,pin,venue){
    var newResponseRef = responseRef.push();
    newResponseRef.set({
        firstname:firstname,
        lastname:lastname,
        email:email,
        number:number,
        address:address,
        address1:address1,
        city:city,
        state:state,
        pin:pin,
        venue:venue,
    })
}