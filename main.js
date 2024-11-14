const inputPassword = document.getElementsByClassName("password")[0];
const inputRange = document.getElementsByClassName("range")[0];
const labelNumberRange = document.getElementsByClassName("range-num")[0];
const buttonCopy = document.getElementsByClassName("copy")[0];
const checkBox = document.querySelectorAll('input[type="checkbox"]');
const buttonGenerate = document.getElementsByClassName("generate")[0];

console.log(checkBox);

buttonGenerate.addEventListener("click", () => {
    const length = inputRange.value;
    inputPassword.value = generatePassword(length);
})

inputRange.addEventListener("input", () => {
    const value = inputRange.value;
    labelNumberRange.textContent = value;
})

function generatePassword(length) {
    const upperCase = checkBox[0];
    const lowerCase = checkBox[1];
    const number = checkBox[2];
    const symbols = checkBox[3];
    let characters = "";
    let result = "";

    if (upperCase.checked) {
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    };
    if (lowerCase.checked) {
        characters += "abcdefghijklmnopqrstuvwxyz";
    };
    if (number.checked) {
        characters += "0123456789";
    };
    if (symbols.checked) {
        characters += "!@#$%^&*()_+=-{}[]|:;<>,.?/";
    };
    if (characters === "") {
        document.querySelector(".error").style = "display: block;";
        // inputPassword.value = "";
        return result;
    }
    // characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-{}[]|:;<>,.?/";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.querySelector(".error").style = "display: none;";
    return result;
}

buttonCopy.addEventListener("click", () => {
    navigator.clipboard.writeText(inputPassword.value);
    setTimeout(() => {
        buttonCopy.textContent= "Copid!";
    }, 100);
    setTimeout(() => {
        buttonCopy.textContent= "Copy";
    },3000)
});