
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
const dr =firebase.database().ref("/vendors");
dr.on('value',(snapshot)=>{
  var drs =snapshot.val()
  if(drs!=null)
  {
  var keys =Object.keys(drs);
  let newService =[];
  for(var dr = 0 ;dr<keys.length;dr++){
    var k=keys[dr];
    newService.push({
      description:drs[k].description,
      ideal:drs[k].ideal,
      price:drs[k].price,
      image_url:drs[k].image,
      vendor_name:drs[k].vendor_name,
      tnc:drs[k].terms_and_conditions,
      city:drs[k].city,
      state:drs[k].state,
      
      id:k,
    });
    document.getElementById('test').innerHTML=drs[k].vendor_name
    // document.getElementById('price').innerHTML='Rs '+ drs[k].price,
    // document.getElementById('description').innerHTML=drs[k].description,
    // document.getElementById('address').innerHTML=drs[k].city+","+drs[k].state,
    // document.getElementById('pic').src=drs[k].image
    console.log(newService)
  }


    
} 
})

