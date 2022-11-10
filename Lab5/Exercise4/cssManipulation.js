var paragraph;
var inputs;

window.addEventListener("load", () => {
    paragraph = document.getElementById("changeable");
});

function changeP() {
    getInputs();
    setStyle();
}

function getInputs() {
    inputs = {
        border: {
            r: document.getElementById("border-r"),
            g: document.getElementById("border-g"),
            b: document.getElementById("border-b"),
            w: document.getElementById("border-w")
        },
        background: {
            r: document.getElementById("bg-r"),
            g: document.getElementById("bg-g"),
            b: document.getElementById("bg-b")
        }
    }
}

function setStyle() {
    paragraph.style.borderWidth = testEmpty(inputs.border.w.value) + "px";
    paragraph.style.borderColor = 
        `#${convertToHex(inputs.border.r.value)}${convertToHex(inputs.border.g.value)}${convertToHex(inputs.border.b.value)}`;
    paragraph.style.backgroundColor = 
        `#${convertToHex(inputs.background.r.value)}${convertToHex(inputs.background.g.value)}${convertToHex(inputs.background.b.value)}`;
}

// checks if the value of an input is empty ("")
// basically return emptyValue if value is ""
function testEmpty(value, emptyValue="0") {return value == "" ? emptyValue : value}

function convertToHex(value) {
    return parseInt(testEmpty(value)) < 16 ? "0" + parseInt(testEmpty(value)).toString(16) : parseInt(testEmpty(value)).toString(16);
}
