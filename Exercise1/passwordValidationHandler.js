window.addEventListener("load", () => {
    // get all relevant elements
    let pass1 = document.getElementById("input1");
    let pass2 = document.getElementById("input2");
    let button = document.querySelector("button");
    let validText = document.getElementById("validText");

    // when you click the button
    button.addEventListener("click", () => {
        if (pass1.value != pass2.value)
            alert("Passwords do not match!");
        else if (pass1.value.length < 8)
            alert("Password is too short!");
        else
            validText.style.display = "block";
    });

    // reset validation text when one of the password fields is changed
    function resetValidText() {
        // only reset if its showing
        if (validText.style.display == "block")
            validText.style.display = "none";
    }
    pass1.addEventListener("input", resetValidText);
    pass2.addEventListener("input", resetValidText);
});