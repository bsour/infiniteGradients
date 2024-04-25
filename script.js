var color1 = document.querySelector(".color1");
var color1Text = document.querySelector(".color1-text");
var color2 = document.querySelector(".color2");
var color2Text = document.querySelector(".color2-text");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("random-btn");
var css = document.querySelector("#css-background");

// Function to set the gradient on the page and update text inputs
function setGradient() {
    body.style.background = "linear-gradient(to right, " +
                            color1.value + ", " +
                            color2.value + ")";
    css.textContent = body.style.background + ";";
    color1Text.value = color1.value;
    color2Text.value = color2.value;
}

// Function to generate a random color in hex format
function generateRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to set random colors on both color inputs and the gradient
function setRandomColors() {
    color1.value = generateRandomColor();
    color2.value = generateRandomColor();
    setGradient();
}

// Function to copy CSS background text to clipboard
function copyToClipboard() {
    var tempInput = document.createElement("input");
    tempInput.value = css.textContent;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    css.textContent = "Copied!";
    setTimeout(function() {
        css.textContent = body.style.background + ";";
    }, 2000); // Revert to the original CSS background text after 2 seconds
}

// Event listener for the random button to set colors and apply animation
randomBtn.addEventListener("click", function() {
    setRandomColors();
});

// Event listeners for color inputs and text inputs
color1.addEventListener("input", setGradient);
color1Text.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
color2Text.addEventListener("input", setGradient);

// Event listener for the CSS text to copy to clipboard
css.addEventListener("click", copyToClipboard);
