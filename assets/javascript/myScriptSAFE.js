
//wait for user to enter a key [EVENT]
//user enters key and a director is chosen at random from an array []
//chosen director is broken up into invidual letters and stored in an array
//placeholder lines are displayed on screen indicating the number of letters in the director's name
//user hits a key to guess one of the letters
//letter from key is captured 
//if letter matches one of the letters in the director array, display that letter in the correct place(s) and remove the placeholder(s).
//if letter doesn't match, display the letter chosen in a row so user can see what letters they have tried.
//if letter doesn't match, reduce the number of guesses left by one
//if all letters have been guessed correctly before they run out of guesses, display a win and tell the user they can try a new word if they hit another key.  Display words guessed correctly number and reset all variables.
//if all letters haven't been found by the time they run out of guesses, display a lose and tell the user they can try a new word if they hit another key.  Display words guessed correctly number. and reset all variables


document.onkeyup = function(event) {
//THIS SECTION WORKS
        // array that holds all of the directors 
        var directorBankArray = ["spielberg","lucas","aronofsky", "nolan", "jonze","kubrick","allen","lee","tarantino","scorsese","hughes","lynch","hitchcock","anderson","fincher","cameron","coppola","scott","burton","lee","jackson","stone","howard","carpenter","fellini","soderbergh","herzog"];
        // variable that holds the choice the computer randomly made from the directorBankArray
        var director = directorBankArray[Math.floor(Math.random() * directorBankArray.length)];
        console.log(director);
        var letterArray = [ ];
        var numGuess = 4;
        var missedLetters = [ ];
        var i = 0;
        var j = 1;
  

//conditional statement for assigning each letter to an index in the letterArray.  while the number of letters left in the array does not equal 0
            while (i<= director.length) {
                letterArray[i] = director.charAt(director.length - director.length + i);
                 console.log(letterArray[i]);   
                 i = i + 1;
            }
// adds a ____ as a placeholder for each letter that exists, and not a letter more!
            while (j<= director.length) {
                 document.getElementById("box" + j).innerHTML = "__";
                 j = j + 1;
             }

// listens for key entered and assigns it variable userGuess
            document.onkeyup = function(event) {
            var userGuess = event.key;
// counter for determining if the guess was correct.  If it's not, counter will decrease numGuess by 1
            var a = 0;

// condition program that checks the letter stored in userGuess against each index of letterArray.

                    
          if (userGuess === letterArray[0]) {
            document.getElementById("box1").innerHTML = userGuess;
            a = 1;
        } if (userGuess === letterArray[1]) {
           document.getElementById("box2").innerHTML = userGuess;
           a = 1;
        } if (userGuess === letterArray[2]) { 
            document.getElementById("box3").innerHTML = userGuess;
            a = 1;
        } if (userGuess === letterArray[3]) {
            document.getElementById("box4").innerHTML = userGuess;
            a = 1;
        } if (userGuess === letterArray[4]) {
            document.getElementById("box5").innerHTML = userGuess;
            a = 1;
        } if (userGuess === letterArray[5]) {
            document.getElementById("box6").innerHTML = userGuess;
            a = 1;
        } if (userGuess === letterArray[6]) {
           document.getElementById("box7").innerHTML = userGuess;
           a = 1;
        } if (userGuess === letterArray[7]) {
            document.getElementById("box8").innerHTML = userGuess;
            a = 1;
        } if (userGuess === letterArray[8]) {
            document.getElementById("box9").innerHTML = userGuess;
            a = 1;
        } if (userGuess === letterArray[9]) {
            document.getElementById("box10").innerHTML = userGuess;
            a = 1;
// decreases number of guesses left and displays it
        } else if (a === 0) {
            numGuess = numGuess - 1;
            missedLetters.push(userGuess);
            document.getElementById("guessesLeft").innerHTML = missedLetters.toString() + "<br />" + "Guesses Left: " + numGuess;
        } 
// if they run out of guesses, displays "You Suck"
        if (numGuess == 0) {
            document.getElementById("guessesLeft").innerHTML = "You Suck!";
        }
     }  
}
