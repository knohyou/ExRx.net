
    // Saves message on form submit.

    'use strict';

   // var username = document.getElementById('username-text');
    var exerciseDescription = document.getElementById('exercise-description').innerHTML;
    var exerciseName = document.getElementById('exercise-name').innerHTML;
    var muscleGroup = document.getElementById('muscle-group').innerHTML;
    var favoriteButton = document.getElementById('favorite-button');


    favoriteButton.addEventListener("click", addExercise);


    function addExercise() {
      //alert('Start');
      //var username = document.getElementById('username-text');
      //document.getElementById("demo").innerHTML = "I can display " + exerciseName;
      //alert('Write User Data');
      //alert(workoutDescription);
     //firebase.database().ref('users/').push({name: exerciseName});
      firebase.database().ref('users/').push({
        name: exerciseName,
        description: exerciseDescription,
        muscle: muscleGroup
      }); 
      //alert('Did it work?'); 
     };

