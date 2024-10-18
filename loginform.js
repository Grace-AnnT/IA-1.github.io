//Username and password
const Username = "Grace-AnnP";
const Password = "Palgrace@1"; 

let attempts = 0;

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === Username && password === Password) {
        alert("Login successful!");

        sessionStorage.setItem("loggedIn", "true");

        window.location.href = "service.html"; // Goes to products page
    } else {
        attempts++;
        document.getElementById("error-message").textContent = `Invalid login attempt (${attempts}/3).`;//show error message after 3 try

        if (attempts >= 3) {
            window.location.href = "error.html"; // Redirect to error page after 3 attempts
        }
    }
});
