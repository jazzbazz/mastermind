(function() {
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyD8UT_hls9kisR8JEanegyKWVRdimECArs",
    authDomain: "projecthistory-wom.firebaseapp.com",
    databaseURL: "https://projecthistory-wom.firebaseio.com",
    projectId: "projecthistory-wom",
    storageBucket: "projecthistory-wom.appspot.com",
    messagingSenderId: "655750246180"
  
  
  
  };
  firebase.initializeApp(config);
//getting elements login
const txtEmail = document.getElementById('txtEmail');
console.log(txtEmail.value);
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnlogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnlogout');

//Add login event
btnLogin.addEventListener('click', e => {
    //Get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    
    //Sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
    
});

//Add signup event
    btnSignUp.addEventListener('click', e => {
       //Get email and pass
        //TODO CHECK FOR REAL EMAIL
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    
    //Sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
    
}); 
    
//Add signup event with facebook
    
    //Add signout event
    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
        
    });
    //add realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
    
    if(firebaseUser) {
        console.log(firebaseUser);
        btnLogout.classList.remove('hide');
    }else {
        console.log("not logged in");
        btnLogout.classList.add('hide');
    }
    
});
        
   //where does this come from ?-->>> });


//getting the H1 reference
var bigOne = document.getElementById('bigOne');
//create db reference and creating childlocation called text
var dbRef = firebase.database().ref().child('text');
//sync with db

dbRef.on('value', snap => bigOne.innerText = snap.val());

}());