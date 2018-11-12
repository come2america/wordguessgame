
    //get user letter and change da. instead of word its document get by    
    //if letters same present final 
    var guesses = []
    var matches = [];
    var prompt = prompt("Player One Chooses A Word and Player Two Guesses It")
    var aiChoice = (prompt.split(""));
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



    //choose a word
    document.onkeyup = function (event) {
        console.log("running")
        var userInput = event.key;
        winsElem.textContent = wins;

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
    }

    function reset() {
        if (matches == aiChoice) {
             wins = 0; 
             alert(" U won, Press Space To See the word ")
             alert(" The word was  "+ aiChoice)
             location.reload();
        }
    }
