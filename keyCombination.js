// Define a secret key combination (e.g., "ADK")
const secretKeyCombination = ['A', 'D', 'K'];

// Track the key presses
let keySequence = [];

// Function to check if the key sequence matches the secret key combination
function checkKeySequence() {
    if (
        keySequence.length === secretKeyCombination.length &&
        keySequence.every((key, index) => key === secretKeyCombination[index])
    ) {
        // Redirect to the login page
        window.location.href = 'login.html';
    } else {
        // Redirect to index.html if the key sequence is not correct
        window.location.href = 'index.html';
    }
}

// Listen for keydown events
document.addEventListener('keydown', function (event) {
    // Convert the pressed key to uppercase
    const pressedKey = event.key.toUpperCase();

    // Add the key to the key sequence
    keySequence.push(pressedKey);

    // Check if the key sequence matches the secret key combination
    checkKeySequence();
});

// Clear the key sequence after a timeout
setTimeout(() => {
    keySequence = [];
}, 2000); // Adjust the timeout as needed

// Check if the user is trying to access login.html directly without the correct keys
if (!keySequence.join('').includes('ADK')) {
    // Redirect the user to index.html
    window.location.href = 'index.html';
}