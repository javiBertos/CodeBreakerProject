let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here

    if (answer.value === '' || attempt.value === '') {
        setHiddenFields();
    }
}

//implement new functions here
function setHiddenFields() {
    answer.value = ("0000" + Math.floor(Math.random() * 9999).toString()).slice(-4);
    attempt.value = 0;
}

function setMessage(message) {
    document.getElementById('message').innertHTML(message);
}

function validateInput (code) {
    if (code.length !== 4) {
        setMessage("Guesses must be exactly 4 characters long.");
        return false;
    }

    return true;
}
