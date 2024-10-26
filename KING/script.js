// Function to increment the score and update the display
function addScore() {
    sessionStorage.score = Number(sessionStorage.score) + 1;
    document.getElementById("score").innerHTML = sessionStorage.score;
}

// Function to show the explanation for the selected answer
function showExplanation(button) {
    const explanationBox = document.getElementById('explanation');
    const explanation = button.getAttribute('data-explanation');
    
    explanationBox.innerHTML = explanation;
    explanationBox.style.display = 'block';
}

// Retrieve the current score from session storage
function getScore() {
    return sessionStorage.score;
}

// Function to display the final score message based on how secure the user is
function displayScore() {
    const score = Number(sessionStorage.score);
    
    let message = "";
    
    if (score <= 5) {
        message = `Your score is: ${score}/15!\nYikes! You need to brush up on your cybersecurity awareness. Remember, cyber threats are real, and King Phisher could be lurking!`;
    } else if (score <= 10) {
        message = `Your score is: ${score}/15!\nNot bad! You're getting there, but there's room for improvement. Keep participating in Aquila Cyber's Cybersecurity Awareness Month activities to learn more.`;
    } else if (score <= 15) {
        message = `Your score is: ${score}/15!\nGreat job! You're well on your way to being cybersecure. Stay tuned for more quizzes from Aquila Cyber during Cybersecurity Awareness Month.`;
    } else {
        message = `Your score is: ${score}/15\nHmm, that seems suspicious. Don't try to outsmart King Phisher!`;
    }
    
    alert(message);
}

// Initialize score to 0 if it's the user's first time
if (!sessionStorage.score) {
    sessionStorage.score = 0;
}
