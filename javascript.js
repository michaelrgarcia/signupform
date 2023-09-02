const pwd1 = document.querySelector("#userpwd");
const pwd2 = document.querySelector("#confirmpwd");
const pwderror = document.querySelector(".confirmerror");
const submit = document.querySelector("button");

document.addEventListener("input", check);

function check() {
    if (pwd1.value !== "") {
        if (pwd1.value !== pwd2.value) {
            pwderror.hidden = false;
            pwd1.classList.add("error");
            pwd2.classList.add("error");
            submit.disabled = true;
        } else {
            pwderror.hidden = true;
            pwd1.classList.remove("error");
            pwd2.classList.remove("error");
            submit.disabled = false;
        }
    }
}
