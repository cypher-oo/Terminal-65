
// const firebaseConfig = {
//     apiKey: "AIzaSyAQBgM9AFU9QB1F0h8O8aY2J0xHEoc6jV8",
//     authDomain: "terminal65-8ac1a.firebaseapp.com",
//     databaseURL: "https://terminal65-8ac1a-default-rtdb.firebaseio.com",
//     projectId: "terminal65-8ac1a",
//     storageBucket: "terminal65-8ac1a.appspot.com",
//     messagingSenderId: "82005650969",
//     appId: "1:82005650969:web:da04d479397228ea38c488"
//   };
//     // Initialize Firebase
//     firebase.initializeApp(firebaseConfig);

//   var userDataRef = firebase.database().ref("vendors").orderByKey();
//   userDataRef.once("value").then(function(snapshot) {
//   snapshot.forEach(function(childSnapshot) {
//     var key = childSnapshot.key;
//     var childData = childSnapshot.val();              
//     var name_val = childSnapshot.val().vendor_name;
//     var price = childSnapshot.val().price;
//     var state = childSnapshot.val().state;
//     var city = childSnapshot.val().city;
//     var image=childSnapshot.val().image;
    
//     document.getElementById('test').innerHTML=childData['vendor_name']
//     // document.getElementById('pic').src=childData['picture']
//     document.getElementById('description').innerHTML=childData['description']
//     document.getElementById('price').innerHTML='Rs '+ childData['price']
//     document.getElementById('city').innerHTML=childData['city']+','+childData['state']
//     document.getElementById('capacity').innerHTML=childData['capacity']+"+"
//     document.getElementById('address').innerHTML=childData['address']
//     document.getElementById('capacitys').innerHTML=childData['capacity']
//     document.getElementById('ideal').innerHTML=childData['ideal']
//     document.getElementById('ac').innerHTML=childData['ac']
//     document.getElementById('wifi').innerHTML=childData['wifi']
//     document.getElementById('pool').innerHTML=childData['pool']
//     document.getElementById('drinking').innerHTML=childData['drinking']
//     document.getElementById('outside').innerHTML=childData['outside_food']
//     document.getElementById('music').innerHTML=childData['music']
//     document.getElementById('backup').innerHTML=childData['backup']
//     console.log(childData)
  
 
//     });
//   });

  
//listing code

var vendor_name;

var url = location.href; 
vendor_name = url.split('?')[1].split('=')[1]
console.log(vendor_name)
console.log(url)
var x = decodeURIComponent(vendor_name).toLocaleLowerCase()
console.log(x)
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

  var userDataRef = firebase.database().ref("/vendors/"+x);
  
  userDataRef.once("value").then(function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    var key = childSnapshot.key;
    var childData = snapshot.val();              
    var name_val = childSnapshot.val().vendor_name;
    var price = childSnapshot.val().price;
    var state = childSnapshot.val().state;
    var city = childSnapshot.val().city;
    var image=childSnapshot.val().image;
    document.getElementById('test').innerHTML=childData['vendor_name']
    document.getElementById('open-popup').src=childData['picture']
    document.getElementById('description').innerHTML=childData['description']
    document.getElementById('price').innerHTML='Rs '+ childData['price']
    document.getElementById('city').innerHTML=childData['city']+','+childData['state']
    document.getElementById('capacity').innerHTML=childData['capacity']+"+"
    document.getElementById('address').innerHTML=childData['address']
    document.getElementById('capacitys').innerHTML=childData['capacity']
    document.getElementById('ideal').innerHTML=childData['ideal']
    document.getElementById('ac').innerHTML=childData['ac']
    document.getElementById('wifi').innerHTML=childData['wifi']
    document.getElementById('pool').innerHTML=childData['pool']
    document.getElementById('drinking').innerHTML=childData['drinking']
    document.getElementById('outside').innerHTML=childData['outside_food']
    document.getElementById('music').innerHTML=childData['music']
    document.getElementById('backup').innerHTML=childData['backup']
 
    });
  });

  

    




    



