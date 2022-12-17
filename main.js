const passwordInput = document.querySelector("#password");
const confirmInput = document.querySelector("#confirm_password");
const errorText = document.querySelector("#error_text");

function pwdCheck() {
	pwdOne = passwordInput.value;
	pwdTwo = confirmInput.value;

	if (pwdOne != pwdTwo) {
		passwordInput.classList.add("error");
		confirmInput.classList.add("error");
		errorText.style.display = "block";
	} else {
		passwordInput.classList.remove("error");
		confirmInput.classList.remove("error");
		errorText.style.display = "none";
	}
}
