
// user info
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterChosen = ""

// computer options
  var options = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// computer to make a choice
    var randomIndex = Math.floor(Math.random()*options.length);
    var computerGuess = options[randomIndex]; 

// user to make a choice
  document.onkeyup = function(event) {
    var userPress = event.key;
    document.querySelector('#guessesSoFar').innerHTML = userPress

    
    console.log("u: " + userPress + " and c: " + computerGuess + " random is: " + randomIndex);

// compare choices, determine win, loss
    if( userPress === computerGuess) {
      wins++;
      console.log("wins: "+ wins);
      randomIndex = Math.floor(Math.random()*options.length);
      computerGuess = options[randomIndex];
    } else {
      losses++;
      guessesLeft--;
      console.log("loss: "+ losses);
      randomIndex = Math.floor(Math.random()*options.length);
      computerGuess = options[randomIndex];
    }
  // gameover when guesses left=0
    if(guessesLeft == 0) {
      guessesLeft = "gameover";
    }
// guesses left
    console.log("losses: " + losses)
    console.log("user press:+ user press")
    if( userPress === losses) {
      guessesLeft--;
      console.log("guessesLeft"-1)
    } 

// display results that will update as user presses a key.
    var html = "<p>Press any letter to start playing</p>" + 
    "<p>wins: " + wins + "</p>" +
    "<p>loss: " + losses + "</p>";

document.querySelector('#wins').innerHTML = wins
document.querySelector('#losses').innerHTML = losses
document.querySelector('#guessesLeft').innerHTML = guessesLeft

  }