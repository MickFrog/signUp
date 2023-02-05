const form = document.querySelector(".userForm");
const userPass = document.querySelector("#userpwd");
const confirmPass = document.querySelector("#confirmPwd");
const errorMsg = document.querySelector(".passError")

form.addEventListener('submit', (event) => {
    if(confirmPass.value != userPass.value) {
        errorMsg.textContent = "⚠ Passwords must match";
        event.preventDefault();
    }
});