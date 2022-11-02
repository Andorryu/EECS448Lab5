
// unmodifiable
const navItems = [
    {
        title: "Home",
        href: "index.html"
    }
];

// modifiable
// modify in respective html file
let hrefPrefixes = {
    "Home": "/"
};

window.addEventListener("load", () => {
    let nav = document.querySelector("nav");
    for (let item of navItems) {
        let a = nav.appendChild(document.createElement("div"));
        let div = a.appendChild(document.createElement("div"));
        a.textContent = item.title;
        a.setAttribute("href", hrefPrefixes[item.title] + item.href);
    }
});