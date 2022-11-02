
// unmodifiable
const navItems = [
    {
        title: "Home",
        href: "index.html"
    },
    {
        title: "Exercise 1",
        href: "password_validator.html"
    },
    {
        title: "Exercise 2",
        href: "password_validator.html"
    },
    {
        title: "Exercise 3",
        href: "password_validator.html"
    },
    {
        title: "Exercise 4",
        href: "password_validator.html"
    }
];

// modifiable
// modify in respective html file
let hrefPrefixes = {
    "Home": "./",
    "Exercise 1": "./",
    "Exercise 2": "./",
    "Exercise 2": "./",
    "Exercise 3": "./",
    "Exercise 4": "./"
};

window.addEventListener("load", () => {
    let nav = document.querySelector("nav");
    for (let item of navItems) {
        let a = nav.appendChild(document.createElement("a"));
        //let div = a.appendChild(document.createElement("div"));
        //div.textContent = item.title;
        a.textContent = item.title;
        a.setAttribute("href", hrefPrefixes[item.title] + item.href);
    }
});