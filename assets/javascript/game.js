
//get user letter and change da. instead of word its document get by    
//if letters same present final 
var guesses = []
var matches = [];
var prompt1 = prompt(" Player one choose theme")

var prompt2 = prompt("Player One Chooses A Word and Player Two Guesses It")
alert("the theme is " + prompt1 + " Yr lives are the number of letters in the word so guess it prefect")
var aiChoice = (prompt2.split(""));
var ulchoice = document.getElementById("u-choice");

console.log(aiChoice)
for (var i = 0; i < aiChoice.length; i++) {
    var para = document.createElement("span");
    var node = document.createTextNode(" _ ");
    para.appendChild(node);
    var finalword = document.getElementById("a-choice");
    finalword.appendChild(para);
}


var winsElem = document.getElementById("wins");
var livesElem = document.getElementById("lives");
var wins = 0;
var lives = aiChoice.length;


//choose a word
document.onkeyup = function (event) {
    console.log("running")
    var userInput = event.key;
    winsElem.textContent = wins;
    livesElem.textContent = lives;


    //add userput to empty div
    // 
    guesses.push(userInput);
    console.log("guesses", guesses);
    //ulchoice.textContent = guesses;
    ulchoice.textContent = guesses;
    //what happens when guess are right letter by letter without repeating
    // console.log( aiChoice)

    diff(userInput);

    console.log(matches);
    finalword.textContent = matches;
    reset();
}
function findAllOccuranceIndicies(userInput) {
    var indicies = [];
    for (var i = 0; i < aiChoice.length; i++) {
        if (userInput === aiChoice[i]) {
            indicies.push(i)
    wins++
        }

    }
    return indicies;
   
}



//get correct guesses  
function diff(userInput) {
    var indicies = findAllOccuranceIndicies(userInput);
    for (var i = 0; i < indicies.length; i++) {
        matches[indicies[i]] = userInput;
    }
   
     if (matches !== aiChoice[i]) { 
        lives--
    }

}
 

function reset() {
    if (wins == aiChoice.length) {
        wins = 0;
        alert(" U won, Press Space To See the word ")
        alert(" The word was  " + aiChoice)
        location.reload();
    }
    else if ( lives==0){
        lives= aiChoice.length;
        alert( " U lOST")
        alert(" The word was  " + aiChoice)
        location.reload();
    }
    


}


