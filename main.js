function rockPaperScizzors(userChoice) {

// Converting user's RPS into number
let userChoiceNumber;
let result;
if (userChoice == "R" || userChoice == "P" || userChoice == "S") {
    if (userChoice == "R") {
        userChoiceNumber = 0;
    }
    else if (userChoice == "P") {
        userChoiceNumber = 1;
    }
    else if (userChoice == "S") {
        userChoiceNumber = 2;
    }
// Making the PC choose R/P/S
    let rng = Math.floor(Math.random() * 3);

    if (rng == 0) {
        alert("I choose ROCK!");
    }
    else if (rng == 1) {
        alert("I choose PAPER!");
    }
    else {
        alert("I choose SCIZZORS!");
    }
// The result of the match
    let shoot = userChoiceNumber - rng;

    if (shoot == 0) {
        result = "t";
    }
    else if (shoot == 1 || shoot == -2) {
        result = "w";
    }
    else if (shoot == -1 || shoot == 2) {
        result = "l";
    }
}

else if (userChoice != "R" || userChoice != "P" || userChoice != "S") {
    result = undefined;
}

// Function's return
    console.log(result);
    return result;
}








// THIS IS WHERE THE GAME'S WORKING STARTS

// How many rounds?

let rounds = prompt("We are playing \"Rock, Paper, Scizzors\" whether you like it or not. Read everything CAREFULLY. How many ronds will we play?");
let roundsNumber = parseInt(rounds);

if (rounds != roundsNumber) {
    alert("Refresh the page and enter a number!");
}
else if (roundsNumber <= 0) {
    alert("We have finished the g- ... HA you wish! Now refresh the page and type an actual number of rounds you clown!");
}
else if (roundsNumber > 25) {
    alert("Breh, that's too many rounds... Whether you're an addict to RPS or just a troll doesn't matter, just refresh the page, lets not play more than 25 rounds!");
}
else {
    
//A bunch of COMPLETELY NECESSARY variables for the PC's speech lines
    let wins = 0;
    let losses = 0;
    let ties = 0;

    let previousTies = 0;
    let previousWins = 0;
    let previousLosses = 0;

    let tieStreak = 0;
    let winStreak = 0;
    let looseStreak = 0;

    let deathCount = 0;
    let j = 0;


// THE ENDLESSLY HELLISH GAME LOOP STARTS HERE  

    for(let i = 0; i < roundsNumber; i++) {
        //user's RPS input
        let userRPS;
        let match = 0;

//Starting the match 
        if (wins + losses + ties == 0) {
           userRPS = prompt("Very well, lets start with these " + roundsNumber + " rounds, shall we? READ THIS: Type \"R\" for \"rock\", \"P\" for \"paper\", or \"S\" for\"scizzors\".");
        }

//TIES        
        else if (ties > previousTies) {
            previousTies = ties;
            tieStreak = tieStreak + 1;
            winStreak = 0;
            looseStreak = 0;


            if (tieStreak == 3) {
                userRPS = prompt("Three ties in a row... Rock, Paper, Scizzors SHOOT!");
            }

            else if (tieStreak == 4) {
                userRPS = prompt("Four ties in a row... Are we psychics?... Rock, Paper, Scizzors SHOOT!");
            }

            else if (tieStreak == 5) {
                alert("FIVE TIES IN A ROW, FORGET ABOUT THE GAME, WE ARE TOO GOOD FOR IT! LET'S CONQUER THE WORLD RIGHT NOW!!!");
                i = roundsNumber - 1;
            }
            else {
                userRPS = prompt("This match was a tie... let's continue. Rock, Paper, Scizzors SHOOT!");
            }
        }



//LOOSING    

        else if (losses > previousLosses) {
            previousLosses = losses;
            tieStreak = 0;
            winStreak = 0;
            looseStreak = looseStreak + 1;


            if (looseStreak == 3) {
                userRPS = prompt("Three losses in a row, you're having some bad luck... Rock, Paper, Scizzors SHOOT!");
            }

            else if (looseStreak == 4) {
                userRPS = prompt("OOOF four losses in a row, am I seriosly that good at this?... Rock, Paper, Scizzors SHOOT!");
            }

            else if (looseStreak == 5) {
                alert(" FIVEEEE, FIVEEEEEE, I just crushed you! Maybe I could challenge the Demon's Wheel and win... I'm joking, that's a whole different level.");
                i = roundsNumber - 1;
            }

            else if (losses - wins == 3) {
                userRPS = prompt("Winning by 3?... No, it's me who's winning, not you, so lets keep going. Rock, Paper, Scizzors SHOOT!");
            }

            else if (losses - wins == 4) {
                userRPS = prompt("I won again, I have a really good advantage, so you better win this time... Rock, Paper, Scizzors SHOOT!");
            }

            else if (losses - wins == 5) {
                i = roundsNumber;
                alert("... It's ok... Loosing is part of... I'm not very good at this you know, so find some energy to challenge me again, ok?");
            }

            else if (losses > wins) {
                match = losses - wins;
                userRPS = prompt("Looks like I'm winning by " + match + ", can you catch up to me? Rock, Paper, Scizzors SHOOT!");
            }

            else if (wins == losses && wins + losses != 0) {
                userRPS = prompt("Our scores are currently tied! Rock, Paper, Scizzors SHOOT!");
            }    
            else if (losses < wins) {
                match = wins - losses;
                userRPS = prompt("I won this one, but you're ahead of me by " + match + ". I will have lead soon... Rock, Paper, Scizzors SHOOT!");
            }    
        }




//WINNING

        else if (wins > previousWins) {
            previousWins = wins;
            tieStreak = 0;
            winStreak = winStreak + 1;
            looseStreak = 0;


            if (winStreak == 3) {
                userRPS = prompt("Three wins in a row, are you serious!?... Rock, Paper, Scizzors SHOOT!");
            }

            else if (winStreak == 4) {
                userRPS = prompt("YOU DARE WIN AGAIN!? If you win once more I swear... Rock, Paper, Scizzors SHOOT!");
            }

            else if (winStreak == 5) {
                alert("UGH you're unbelievable! \"I win!\", \"I win!\" Yeah? Why don't you go challenge the Demon's Wheel instead!?    *Ragequits*");
                i = roundsNumber - 1;
            }

            else if (wins - losses == 3) {
                userRPS = prompt("Oh?... OOOOH????? Winning by 3? I see how it is! Rock, Paper, Scizzors SHOOT!");
            }

            else if (wins - losses == 4) {
                userRPS = prompt("Winning to me by 4? You better not win again... Rock, Paper, Scizzors SHOOT!");
            }

            else if (wins - losses == 5) {
                i = roundsNumber;
                alert("... Next time IIIII will win! *Throws a chair to the window*");
            }

            else if (wins > losses) {
                match = wins - losses;
                userRPS = prompt("So far you're winning by " + match + ", but we'll see who wins on the next one. Rock, Paper, Scizzors SHOOT!");
            }
            else if (wins == losses && wins + losses != 0) {
                userRPS = prompt("Our scores are currently tied! Rock, Paper, Scizzors SHOOT!");
            }
            else if (wins < losses) {
                match = losses - wins;
                userRPS = prompt("You win this round, but I'm still ahead by " + match + ". Let's see how things keep going. Rock, Paper, Scizzors SHOOT!");
            }    
        }


        else if (wins + losses + ties == previousLosses + previousTies + previousWins) {
            userRPS = prompt("Let's not make the same mistake again. Make sure to check that you're typing \"R\", \"P\", or \"S\" in capital letters... Rock, Paper, Scizzors SHOOT!");
        }

let matchResult = rockPaperScizzors(userRPS);
        
        if (matchResult == "w") {
            wins = wins + 1;
            j++;
        }
        else if (matchResult == "l") {
           losses = losses + 1;
           j++;
        }        
        else if (matchResult == "t") {
            ties = ties + 1;
            j++;
        }
        else if (matchResult == undefined && winStreak < 5 && looseStreak < 5 && tieStreak < 5 && Math.abs(wins - losses) < 5) {
            previousTies++;
            ties++;  
            deathCount = deathCount + 1;
            alert("You didn't type  \"R\", \"P\", or \"S\". Make sure to check that you're typing in capital letters. Death Count = " + deathCount + ".");
        }

        if (deathCount >= 3) {

            alert("Death Count has reached 3! The Empty Crow will perch on your shoulder and claim your soul!");
            i = roundsNumber - 1;
        }
    }
    if (deathCount < 3) {
         alert("After " + j + " matches played these are your final results: " + wins + " Wins, " + losses + " Losses, and " + ties + " Ties.");
    }
    else {
        alert("THECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTYTHECROWWASEMPTY");
    }
}