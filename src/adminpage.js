// JavaScript code for the adminPage
document.addEventListener("DOMContentLoaded", function () {
    // Check if the user is authenticated (example authentication logic)
    var isAuthenticated = checkAuthentication();

    if (!isAuthenticated) {
        // If the user is not authenticated, redirect them to the index.html page
        window.location.href = "index.html";
    }
});

// Example authentication logic (replace this with your actual authentication logic)
function checkAuthentication() {
    // You can use cookies, localStorage, sessionStorage, or make an API request to validate authentication
    // For simplicity, we'll use sessionStorage in this example

    var username = sessionStorage.getItem("username");
    var password = sessionStorage.getItem("password");

    // Check if the user is authenticated based on stored credentials
    return username === "Harry Potter" && password === "Lord Voldemort";
}
