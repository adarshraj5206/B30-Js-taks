function generatePassword() {
    const length = document.getElementById("length").value;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;

    let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numberChars = "0123456789";
    let symbolChars = "!@#$%^&*()_+{}[]|:;<>,.?/";

    let charPool = lowercaseChars;
    if (includeUppercase) charPool += uppercaseChars;
    if (includeNumbers) charPool += numberChars;
    if (includeSymbols) charPool += symbolChars;

    let password = "";
    for (let i = 0; i < length; i++) {
        password += charPool.charAt(Math.floor(Math.random() * charPool.length));
    }

    document.getElementById("password").value = password;
}

const passGenBtn = document.querySelector('#passGen');
passGenBtn.addEventListener('click', generatePassword);