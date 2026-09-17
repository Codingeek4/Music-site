const closebutton = document.getElementById("closebutton");
const container1 = document.getElementById("container1");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
let state = false;
closebutton.addEventListener("click", function() {
    if (state === false) {
        container1.style.transition = "left 0.3s ease";
        container1.style.left = "-125px";
        box1.style.transition = "left 0.3s ease";
        box1.style.left = "-125px";
        box2.style.transition = "left 0.3s ease";
        box2.style.left = "-210px";
        box3.style.transition = "left 0.3s ease";
        box3.style.left = "-210px";
        box4.style.transition = "left 0.3s ease";
        box4.style.left = "-210px";
        box5.style.transition = "left 0.3s ease";
        box5.style.left = "-210px";
        state = true;
        return;
    }
    if (state === true) {
        container1.style.transition = "left 0.3s ease";
        container1.style.left = "0px";
        box1.style.transition = "left 0.3s ease";
        box1.style.left = "0px";
        box2.style.transition = "left 0.3s ease";
        box2.style.left = "0px";
        box3.style.transition = "left 0.3s ease";
        box3.style.left = "0px";
        box4.style.transition = "left 0.3s ease";
        box4.style.left = "0px";
        box5.style.transition = "left 0.3s ease";
        box5.style.left = "0px";
        state = false;
    }
});