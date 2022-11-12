
// modifiable
let navItems = [
    {
        title: "Lab 5 Home",
        href: "index.html"
    },
    {
        title: "Lab 6 Home",
        href: "index.html"
    },
    {
        title: "Exercise 1",
        href: "1.html"
    },
    {
        title: "Exercise 2",
        href: "2.html"
    },
    {
        title: "Exercise 3",
        href: "3.html"
    },
    {
        title: "Exercise 4",
        href: "4.html"
    },
];

// modifiable
// modify in respective html file
// these are the defaults for any html file within an "Exercise#" folder
// since most html files are in those folders
let hrefPrefixes = {
    "Lab 5 Home": "../",
    "Lab 6 Home": "../",
    "Exercise 1": "../Exercise1/",
    "Exercise 2": "../Exercise2/",
    "Exercise 3": "../Exercise3/",
    "Exercise 4": "../Exercise4/",
};
let lab6Mode = false;

window.addEventListener("load", () => {
    let nav = document.querySelector("nav");
    for (let item of navItems) {
        if (lab6Mode && item.title == "Exercise 4") continue; // skip exercise 4 if in lab6
        let a = nav.appendChild(document.createElement("a"));
        //let div = a.appendChild(document.createElement("div"));
        //div.textContent = item.title;
        a.textContent = item.title;
        a.setAttribute("href", hrefPrefixes[item.title] + item.href);
    }
});