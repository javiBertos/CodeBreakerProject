let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here

    if (answer.value === '' || attempt.value === '') {
        setHiddenFields();
    }

    if (!validateInput(input.value)) {
        return false;
    }

    attempt.value += 1;

    let userWins = getResults(input.value);

    if (!userWins && attempt.value < 10) {
        setMessage("Incorrect, try again.");
    } else {
        setMessage(userWins ? "You Win! :)" : "You Lose! :(");
        showAnswer(userWins);
        showReplay();
    }
}

//implement new functions here
function setHiddenFields() {
    answer.value = ("0000" + Math.floor(Math.random() * 9999).toString()).slice(-4);
    attempt.value = 0;
}

function setMessage(message) {
    document.getElementById('message').innerHTML = message;
}

function validateInput (guess) {
    if (guess.length !== 4) {
        setMessage("Guesses must be exactly 4 characters long.");
        return false;
    }

    return true;
}

function getResults(guess) {
    let totalRight = 0;
    let result = document.getElementById('results').innerHTML;
    result += '<div class="row"><span class="col-md-6">' + guess + '</span><div class="col-md-6">';

    guess = guess.toString();

    for (let i = 0; i < guess.length; i++) {
        let found = false;

        for (let j = 0; j < answer.value.length; j++) {
            if (guess[i] === answer.value[j]) {
                found = true;
                if (i === j) {
                    totalRight += 1;
                    result += '<span class="glyphicon glyphicon-ok"></span>';
                } else {
                    result += '<span class="glyphicon glyphicon-transfer"></span>';
                }

                break;
            }
        }

        if (!found) {
            result += '<span class="glyphicon glyphicon-remove"></span>';
        }
    }

    result += '</div></div>';

    document.getElementById('results').innerHTML = result;

    return totalRight === answer.value.length;
}

function showAnswer(win) {
    let codeLabel = document.getElementById('code');
    codeLabel.innerHTML = answer.value;
    codeLabel.classList.add(win === true ? 'success' : 'failure');
}

function showReplay () {
    document.getElementById('guessing-div').style.display = "none";
    document.getElementById('replay-div').style.display = "block";
}
