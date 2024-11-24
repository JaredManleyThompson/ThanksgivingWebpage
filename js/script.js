// Get the turkey image and game area
const turkey = document.getElementById('turkey');
const gameArea = document.getElementById('gameArea');

// Random position function for the turkey
function randomPosition() {
    const x = Math.random() * (gameArea.offsetWidth - turkey.offsetWidth);
    const y = Math.random() * (gameArea.offsetHeight - turkey.offsetHeight);
    return { x, y };
}

// Function to move the turkey to a random position
function moveTurkey() {
    const { x, y } = randomPosition();
    turkey.style.left = `${x}px`;
    turkey.style.top = `${y}px`;
}

// Move the turkey every 2 seconds
setInterval(moveTurkey, 200);

// Event listener for clicking the turkey
turkey.addEventListener('click', function() {
    alert('You shot the turkey!');
    moveTurkey();  // Move the turkey to a new position after being clicked
});
