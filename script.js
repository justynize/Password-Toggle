let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function() {
    if (password.type == "password") {
        password.type = "text";
        eyeicon.src = "/Assets/eye-solid.svg";
    } else {
        password.type = "password";
        eyeicon.src = "/Assets/eye-slash-solid.svg";
    }
}
