apiKey: "AIzaSyBCOhQn3ba81JQvLabk3ncwBG_dY6UyP6g",
  authDomain= "contacform-31a8e.firebaseapp.com",
  databaseURL= "https://contacform-31a8e-default-rtdb.firebaseio.com",
  projectId = "contacform-31a8e",
  storageBucket= "contacform-31a8e.appspot.com",
  messagingSenderId = "796189987540",
  appId = "1:796189987540:web:6b3a8871cd5be4cc62a141"
  firebase.initializeApp(firebaseConfig); 

 var contacFormDB = firebase.database().ref('contacForm');

 document.getElementsById('ContactForm').addEventListener('submit', submitForm);


 function submitForm(e){
      e.preventDefault();

      var name = getElementVal('Username');
      var password = getElementVal('Password');

      saveMessages(name ,password);
      
      }
    const saveMessages = ( name, password ) => {
        var newContactForm = contacFormDB.push();

        newContactForm.set({
            name :name,
            password : password, 
        })
    }
    const getElementsVal = (id) =>{
        return document.getElementById(id).value;
    }




