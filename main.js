const closebutton = document.getElementById("closebutton");
const profilebutton = document.getElementById("ProfileButton");
const container1 = document.getElementById("container1");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const profile = document.getElementById("profile");
const searchBox = document.getElementById("searchBox");
let State = false;
let profileState = false;
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
        searchBox.style.transition = "transform 0.3s ease";
        searchBox.style.transform = "translateX(-7.55%) scaleX(1.15)";
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
        searchBox.style.transition = "transform 0.3s ease";
        searchBox.style.transform = "translateX(0%) scaleX(1)";
        State = false;
    }
});
profilebutton.addEventListener("click", function() {
    if (profileState === false) {
        profileState = true;
        profile.style.transition = "right 0.3s ease";
        profile.style.right = "0.7%";
    } else if (profileState === true) {     
        profileState = false;
        profile.style.transition = "right 0.3s ease";
        profile.style.right = "-4.5%";
    }
})