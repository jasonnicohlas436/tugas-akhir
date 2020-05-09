  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAY0d9bQybsZATxFoxASVbIHGmHN_KZ_lA",
    authDomain: "pess-df144.firebaseapp.com",
    databaseURL: "https://pess-df144.firebaseio.com",
    projectId: "pess-df144",
    storageBucket: "pess-df144.appspot.com",
    messagingSenderId: "562145712420",
    appId: "1:562145712420:web:ce8ad03795acbb6a9abbb1",
    measurementId: "G-CT9S59F659"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  
  
  function signUp(){
    
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    
    alert("Signed In");
  }
  
  
  
  function signIn(){
    
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed In "+ email.value);

    //Take user to a different or home page
    
    window.location.replace("play.html")
    
    
  }

