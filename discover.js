const closebutton = document.getElementById("closebutton");
const container1 = document.getElementById("container1");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
let State = false;
closebutton.addEventListener("click", function() {
    if (State === false) {
        container1.style.transition = "left 0.3s ease";
        container1.style.left = "-15%";
        box1.style.transition = "left 0.3s ease";
        box1.style.left = "-10.25%";
        box2.style.transition = "left 0.3s ease";
        box2.style.left = "-15%";
        box3.style.transition = "left 0.3s ease";
        box3.style.left = "-15%";
        box4.style.transition = "left 0.3s ease";
        box4.style.left = "-15%";
        box5.style.transition = "left 0.3s ease";
        box5.style.left = "-15%";
        State = true;
        return;
    }
    if (State === true) {
        container1.style.transition = "left 0.3s ease";
        container1.style.left = "0%";
        box1.style.transition = "left 0.3s ease";
        box1.style.left = "0%";
        box2.style.transition = "left 0.3s ease";
        box2.style.left = "0%";
        box3.style.transition = "left 0.3s ease";
        box3.style.left = "0%";
        box4.style.transition = "left 0.3s ease";
        box4.style.left = "0%";
        box5.style.transition = "left 0.3s ease";
        box5.style.left = "0%";
        State = false;
    }
});