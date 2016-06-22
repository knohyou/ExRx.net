
    function resetPassword() {
      alert('Reseting Password!')
      email = document.getElementById('email').value;
      firebase.auth().sendPasswordResetEmail(email);
    }



    function initApp() {
      document.getElementById('reset-password').addEventListener('click', resetPassword, false);
    }


    window.onload = function() {
      initApp();
    };
