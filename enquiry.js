
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
  var preloader = document.getElementById('loading');
  function myFunction(){
     preloader.style.display='none'
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
  // var userDataRef = firebase.database().ref("vendors").orderByKey();
  // userDataRef.once("value").then(function(snapshot) {
  // snapshot.forEach(function(childSnapshot) {
  //   var key = childSnapshot.key;
  //   var childData = childSnapshot.val();              
  //   var name_val = childSnapshot.val().vendor_name;
  //   var price = childSnapshot.val().price;
  //   var state = childSnapshot.val().state;
  //   var city = childSnapshot.val().city;
  //   var image=childSnapshot.val().image;
    
    // document.getElementById('test').innerHTML=childData['vendor_name']
    // document.getElementById('pic').src=childData['picture']
    // document.getElementById('description').innerHTML=childData['description']

    // document.getElementById('city').innerHTML=childData['city']
  //   console.log(childData)
  
 
  //   });
  // });
//      const dr =firebase.database().ref("/vendors");
//      dr.on('value',(snapshot)=>{
//        var drs =snapshot.val()
//        if(drs!=null)
//        {
//        var keys =Object.keys(drs);
//        console.log(drs)
//        let vendors =[];
//        for(var dr = 0 ;dr<keys.length;dr++){
//          var k=keys[dr];
//          vendors.push({
//            description:drs[k].description,
//            ideal:drs[k].ideal,
//            price:drs[k].price,
//            capacity:drs[k].capacity,
//            image_url:drs[k].image,
//            vendor_name:drs[k].vendor_name,
//            tnc:drs[k].terms_and_conditions,
//            city:drs[k].city,
//            state:drs[k].state,
           
//            id:k,
//          });
//         //  document.getElementById('test').innerHTML=drs[k].vendor_name
//         //  document.getElementById('price').innerHTML='Rs '+ drs[k].price,
//         //  document.getElementById('description').innerHTML=drs[k].description,
//         //  document.getElementById('address').innerHTML=drs[k].city+","+drs[k].state,
//         //  document.getElementById('pic').src=drs[k].image
//          console.log(vendors)
//          var htmlDiv = "";

// vendors.forEach(elem => {
//   console.log(elem.vendor_name)
//   htmlDiv = htmlDiv+ `
//   <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
//                     <div class="vendor-thumbnail">
//                         <!-- Vendor thumbnail -->
//                         <div class="vendor-img zoomimg">
//                             <!-- Vendor img -->
//                             <a href="#"><img src="${elem.image_url}" alt="" class="img-fluid"></a>
//                             <div class="wishlist-sign"><a href="#" class="btn-wishlist"><i class="fa fa-heart"></i></a></div>
//                         </div>
//                         <!-- /.Vendor img -->
//                         <div class="vendor-content">
//                             <!-- Vendor Content -->
//                             <h2 class="vendor-title"><a href="#" class="title">${elem.vendor_name}</a></h2>
//                             <p class="vendor-address">${elem.city},${elem.state}</p>
//                         </div>
//                         <div class="vendor-meta">
//                             <div class="vendor-meta-item vendor-meta-item-bordered">
//                                 <span class="vendor-price">
//                                   Rs ${elem.price}
//                                 </span>
//                                 <span class="vendor-text">Start From</span></div>
//                             <div class="vendor-meta-item vendor-meta-item-bordered">
//                                 <span class="vendor-guest">
//                                    ${elem.capacity}+
//                                 </span>
//                                 <span class="vendor-text">Guest</span>
//                             </div>
//                             <div class="vendor-meta-item vendor-meta-item-bordered">
//                                 <span class="rating-star">
//                                     <i class="fa fa-star rated"></i>
//                                     <i class="fa fa-star rated"></i>
//                                     <i class="fa fa-star rated"></i>
//                                     <i class="fa fa-star rated"></i>
//                                     <i class="fa fa-star rate-mute"></i> 
//                                     </span>
//                                 <span class="rating-count vendor-text">(20)</span></div>
//                         </div>
//                         <!-- /.Vendor Content -->
//                     </div>
//                     <!-- /.Vendor thumbnail -->
//                 </div>
// `;
// console.log(document.getElementById('xx'))
// document.getElementById('xx').innerHTML=htmlDiv
// });

//        }


         
//      } 
//      })
const dr =firebase.database().ref("/vendors");
     dr.on('value',(snapshot)=>{
       var drs =snapshot.val()
       if(drs!=null)
       {
       var keys =Object.keys(drs);
       console.log(drs)
       let vendors =[];
       for(var dr = 0 ;dr<keys.length;dr++){
         var k=keys[dr];
         vendors.push({
           description:drs[k].description,
           ideal:drs[k].ideal,
           price:drs[k].price,
           capacity:drs[k].capacity,
           image_url:drs[k].image,
           vendor_name:drs[k].vendor_name,
           tnc:drs[k].terms_and_conditions,
           city:drs[k].city,
           state:drs[k].state,
           
           id:k,
         });
        //  document.getElementById('test').innerHTML=drs[k].vendor_name
        //  document.getElementById('price').innerHTML='Rs '+ drs[k].price,
        //  document.getElementById('description').innerHTML=drs[k].description,
        //  document.getElementById('address').innerHTML=drs[k].city+","+drs[k].state,
        //  document.getElementById('pic').src=drs[k].image
         console.log(vendors)
         var htmlDiv = "";

vendors.forEach(elem => {
  console.log(elem.vendor_name)
  htmlDiv = htmlDiv+ `
  <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div class="vendor-thumbnail">
                        <!-- Vendor thumbnail -->
                        <div class="vendor-img zoomimg" >
                            <!-- Vendor img -->
                            <a href="#"><img src="${elem.image_url}" alt="" class="img-fluid" style="border-radius: 10%"></a>
                            <div class="wishlist-sign"><a href="#" class="btn-wishlist"><i class="fa fa-heart"></i></a></div>
                        </div>
                        <!-- /.Vendor img -->
                        <div class="vendor-content">
                            <!-- Vendor Content -->
                            <h2 class="vendor-title"><a href="#" class="title">${elem.vendor_name}</a></h2>
                            <p class="vendor-address">${elem.city},${elem.state}</p>
                        </div>
                        <div class="vendor-meta">
                            <div class="vendor-meta-item vendor-meta-item-bordered">
                                <span class="vendor-price">
                                  Rs ${elem.price}
                                </span>
                                <span class="vendor-text">Start From</span></div>
                            <div class="vendor-meta-item vendor-meta-item-bordered">
                                <span class="vendor-guest">
                                   ${elem.capacity}+
                                </span>
                                <span class="vendor-text">Guest</span>
                            </div>
                            <div class="vendor-meta-item vendor-meta-item-bordered">
                                <span class="rating-star">
                                    <i class="fa fa-star rated"></i>
                                    <i class="fa fa-star rated"></i>
                                    <i class="fa fa-star rated"></i>
                                    <i class="fa fa-star rated"></i>
                                    <i class="fa fa-star rate-mute"></i> 
                                    </span>
                                <span class="rating-count vendor-text">(20)</span></div>
                        </div>
												<h3 class="vendor-meta-item vendor-meta-item-bordered btn-primary"><a href="/listing.html?name=${elem.vendor_name}" class="vendor-text" style="color: #fff">View Details</h3>
                        <h3 class="vendor-meta-item vendor-meta-item-bordered btn-default" data-toggle="modal" data-target="#myModal"><a class="vendor-text">Send Enquiry</h3>
                        <!-- /.Vendor Content -->
                    </div>
                    <!-- /.Vendor thumbnail -->
                </div>
`;
console.log(document.getElementById('xx'))
document.getElementById('xx').innerHTML=htmlDiv
});

       }


         
     } 
     })
     
  
     
  
