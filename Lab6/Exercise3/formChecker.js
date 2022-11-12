/* 
    invalid input Conditions:
    - blank text fields (used required html attribute)
    -- username
    -- password
    -- item quantities (cant be negative either --- used min html attribute)
    -- at least one radio option should be selected
    - username must be in the form of an email (used email input type in html)

    The following website helped me a ton with form validation: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
*/

window.addEventListener("load", () => {
    const form = document.querySelector("form");
    const usernameField = document.querySelector("input[name='username']");
    const passwordField = document.querySelector("input[name='password']");
    const vacuumNum = document.querySelector("input[name='vacuum']");;
    const carNum = document.querySelector("input[name='car']");
    const catNum = document.querySelector("input[name='cat?']");
    const errors = document.querySelectorAll(".error");
    const usernameError = errors[0];
    const passwordError = errors[1];
    const vacuumError = errors[2];
    const carError = errors[3];
    const catError = errors[4];
    const shipping = document.getElementsByName("shipping");
    const shippingError = errors[5];
    
    // when user changes input in username field
    usernameField.addEventListener("input", event => {
        if (usernameField.validity.valid) {
            usernameError.textContent = "";
        } else {
            showUsernameError();
        }
    });

    // when user changes password
    passwordField.addEventListener("input", event => {
        if (passwordField.validity.valid) {
            passwordError.textContent = "";
        } else {
            showPasswordError();
        }
    });

    // when the user changes item quantity
    listenItemError(vacuumNum, vacuumError);
    listenItemError(carNum, carError);
    listenItemError(catNum, catError);

    // shipping option radio buttons
    shipping[0].addEventListener("input", event => {
        if (shipping[0].validity.valid) {
            shippingError.textContent = "";
        } else {
            showShippingError();
        }
    });

    // add event listener for the items
    function listenItemError(item, error) {
        item.addEventListener("input", event => {
            if (item.validity.valid) {
                error.textContent = "";
            } else {
                showItemError(item, error);
            }
        });
    }

    // form submission
    form.addEventListener("submit", event => {
        if (!usernameField.validity.valid) {
            showUsernameError();
            event.preventDefault();
        }
        if (!passwordField.validity.valid) {
            showPasswordError();
            event.preventDefault();
        }
        if (!vacuumNum.validity.valid) {
            showItemError(vacuumNum, vacuumError);
            event.preventDefault();
        }
        if (!carNum.validity.valid) {
            showItemError(carNum, carError);
            event.preventDefault();
        }
        if (!catNum.validity.valid) {
            showItemError(catNum, catError);
            event.preventDefault();
        }
        if (!shipping[0].validity.valid) {
            showShippingError();
            event.preventDefault();
        }
    });


    // helper functions
    function showUsernameError() {
        if (usernameField.validity.valueMissing) {
            usernameError.textContent = "Please enter a username";
        } else if (usernameField.validity.typeMismatch) {
            usernameError.textContent = "Please enter username in email format";
        }
    }
    function showPasswordError() {
        if (passwordField.validity.valueMissing) {
            passwordError.textContent = "Please enter a password";
        }
    }
    function showItemError(item, error) {
        if (item.validity.valueMissing) {
            error.textContent = "Please enter a quantity";
        } else if (item.validity.rangeUnderflow) {
            error.textContent = "Please enter a non-negative value";
        }
    }
    function showShippingError() {
        if (shipping[0].validity.valueMissing) {
            shippingError.textContent = "Please choose a shipping option";
        }
    }
});
