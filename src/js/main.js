import "./../scss/app.scss";
import "iconify-icon";

const passwordTogglers = document.querySelectorAll(".password-toggle");

passwordTogglers.forEach((toggle) => {
    const input = toggle.previousElementSibling;
    const icons = toggle.querySelectorAll("iconify-icon");

    toggle.addEventListener("click", () => {
        const showPassword = input.type === "password";
        input.type = showPassword ? "text" : "password";

        icons.forEach((icon) => {
            icon.style.display = icon.style.display === "none" ? "block" : "none";
        });
    });
});

const signUpPassword = document.querySelector("#signup-password");

if (signUpPassword) {
    signUpPassword.querySelector('input[type="password"]').addEventListener("input", (e) => {
        const password = e.target.value;
        const strengthDivs = signUpPassword.querySelectorAll("#passwordStrength div");

        strengthDivs.forEach((div) => (div.style.opacity = "0.2"));

        let strength = 0;

        if (password.length > 6) strength++;
        if (/[A-Za-z]/.test(password) && /\d/.test(password)) strength++;
        if (/\W/.test(password)) strength++;
        if (/[A-Z]/.test(password)) strength++;

        for (let i = 0; i < strength; i++) {
            strengthDivs[i].style.opacity = "1";
        }
    });
}
