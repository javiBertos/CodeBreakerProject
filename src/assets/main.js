let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

//implement new functions here
function setHiddenFields() {
    answer.value = ("0000" + Math.floor(Math.random() * 9999).toString()).slice(-4);
    attempt.value = 0;
}
