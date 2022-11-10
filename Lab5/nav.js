
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
        href: "slide_show.html"
    },
    {
        title: "Exercise 3",
        href: "profile.html"
    },
    {
        title: "Exercise 4",
        href: "css_manipulation.html"
    }
];

// modifiable
// modify in respective html file
// these are the defaults for any html file within an "Exercise#" folder
// since most html files are in those folders
let hrefPrefixes = {
    "Home": "../",
    "Exercise 1": "../Exercise1/",
    "Exercise 2": "../Exercise2/",
    "Exercise 3": "../Exercise3/",
    "Exercise 4": "../Exercise4/",
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