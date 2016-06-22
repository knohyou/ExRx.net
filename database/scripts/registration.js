
    /**
     * Handles the sign in button press.
     */
    function toggleSignIn() {
      if (firebase.auth().currentUser) {
        // [START signout]
        //alert("I signed Out!")
        firebase.auth().signOut();
        document.getElementById('quickstart-sign-up').disabled = false; 
        // [END signout]
      } 
      document.getElementById('quickstart-sign-in').disabled = true;
    } 



    function handleSignUp() {

      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      if (email.length < 4) {
        alert('Please enter an email address.');
        return;
      }
      if (password.length < 4) {
        alert('Please enter a password.');
        return;
      } 

       // Sign in with email and pass.
      // [START createwithemail]
         firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } 
        else if (errorCode == 'auth/email-already-in-use') {
              alert('The account already exists');
        }
        else {
          console.error(error);
        }
        // [END_EXCLUDE]
      });
    }

    function initApp() {
      // Listening for auth state changes.
      // [START authstatelistener]
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // [START_EXCLUDE silent]
          document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
          document.getElementById('quickstart-sign-in').textContent = 'Sign out';
          document.getElementById('quickstart-sign-up').disabled = true;
          // [END_EXCLUDE]
        } else {
          // User is signed out.
          // [START_EXCLUDE silent]
          document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
          document.getElementById('quickstart-sign-in').textContent = 'Sign in';
          document.getElementById('quickstart-account-details').textContent = 'null';
          // [END_EXCLUDE]
        }
        // [START_EXCLUDE silent]
        document.getElementById('quickstart-sign-in').disabled = false;
        //document.getElementById('quickstart-sign-up').disabled = false;
        // [END_EXCLUDE]
      });
      // [END authstatelistener]
      document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
      document.getElementById('quickstart-sign-up').addEventListener('click', handleSignUp, false);
    }


    window.onload = function() {
      initApp();
    };
