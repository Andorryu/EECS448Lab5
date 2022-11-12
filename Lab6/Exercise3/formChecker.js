
window.addEventListener("load", () => {
    let form = document.querySelector("form");
    let usernameField = document.getElementsByName("username")[0];
    let passwordField = document.getElementsByName("password")[0];
    let vacuumNum = document.getElementsByName("Vacuum")[0];
    let carNum = document.getElementsByName("Car")[0];
    let catNum = document.getElementsByName("Cat?")[0];
    let shippingOptions = document.getElementsByName("shipping");
    
    // when user submits form
    form.addEventListener("submit", event => {
        event.preventDefault();
        /* 
            Test if failure conditions are met.
            Failure Conditions:
            - blank text fields
            -- username
            -- password
            -- item quantities (cant be negative either)
            -- at least one radio option should be selected
            - username must be in the form of an email
        */

        // check empty things
        if (usernameField.value == "" ||
        passwordField.value == "" ||
        vacuumNum.value == "" ||
        carNum.value == "" ||
        catNum.value == "") alert("empty string");

        // check email format
        // break loop if '.' is found after '@'
        let email = false;
        loop:
        for (let i = 0; i < usernameField.value.length; i++) {
            if (usernameField.value[i] == '@') {
                for (let j = i; j < usernameField.value.length; j++) {
                    if (usernameField.value[j] == '.') email = true;
                }
            }
        }
        if (!email) alert("username is not email");

        // instead of checking if quantity values are negative, I just set a min of 0 in the html inputs themselves
        // I also autochecked the first radio value so I dont have to check if theres a value for them
    });
});