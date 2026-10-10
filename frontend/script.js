

const welcomePage = document.getElementById("welcomePage");
const loginPage = document.getElementById("loginPage");
const registerPage = document.getElementById("registerPage");
const message = document.getElementById("message");

function showPage(page) {
    welcomePage.classList.add("hidden");
    loginPage.classList.add("hidden");
    registerPage.classList.add("hidden");

    page.classList.remove("hidden");
    message.textContent = "";
}

document.getElementById("loginBtn").addEventListener("click", () => {
    showPage(loginPage);
});

document.getElementById("registerBtn").addEventListener("click", () => {
    showPage(registerPage);
});

document.getElementById("goRegister").addEventListener("click", () => {
    showPage(registerPage);
});

document.getElementById("goLogin").addEventListener("click", () => {
    showPage(loginPage);
});

document.getElementById("backFromLogin").addEventListener("click", () => {
    showPage(welcomePage);
});

document.getElementById("backFromRegister").addEventListener("click", () => {
    showPage(welcomePage);
});

document.getElementById("registerForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match. Please try again.";
        return;
    }

    message.textContent =
        "Registration form validated! Account creation will be connected to the backend.";

    event.target.reset();
});

document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();

    message.textContent =
        "Login form ready! Authentication will be connected to the backend.";

    event.target.reset();
});