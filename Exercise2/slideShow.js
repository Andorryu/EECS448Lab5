
window.addEventListener("load", () => {
    // find img and buttons
    let img = document.querySelector("img");
    let prevButton = document.getElementById("prev");
    let nextButton = document.getElementById("next");
    let images = ["1.jpg", "2.jpg", "3.jpg", "4.PNG", "5.jpg"];
    // initialize first image
    let i = 0;
    img.src="img/"+images[i];
    
    prevButton.addEventListener("click", () => {
        i--;
        if (i < 0) i = 4;
        img.src="img/"+images[i];
    })
    nextButton.addEventListener("click", () => {
        i++;
        if (i > 4) i = 0;
        img.src="img/"+images[i];
    })
});