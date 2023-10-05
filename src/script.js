// JavaScript code for handling form submission and validation
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting by default

    // Get input values
    var name = document.getElementById("name").value;
    var password = document.getElementById("pass").value;

    // Check if the provided login credentials are correct
    if (name === "Harry Potter" && password === "Lord Voldemort") {
        alert("Login successful!");
        // Redirect to the adminPage.html upon successful login
        window.location.href = "adminPage.html";
    } else {
        alert("Invalid login credentials. Please try again.");
        // Clear the password input field
        document.getElementById("pass").value = "";

        // Redirect back to index.html on failed login
        window.location.href = "index.html";
    }
});
