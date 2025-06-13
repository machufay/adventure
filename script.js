// Declare variables below to save the different divs of your story.
let situation = "bottle"
let optionOne = document.querySelector(".option-one");
let optionTwo = document.querySelector(".option-two");
let bottle1 = document.querySelector(".bottle1");
let drinkbottle2 = document.querySelector(".drinkbottle2");
let gunneddown2 = document.querySelector(".gunneddown2");
let gunneddown3 = document.querySelector(".gunneddown3");
let slip3 = document.querySelector(".slip3");
let yell4 = document.querySelector(".yell4");
let look4 = document.querySelector(".look4");
let locked5 = document.querySelector(".locked5");
let walkaway5 = document.querySelector(".walkaway5");

bottle1.style.display = "block";

optionOne.addEventListener("click", function() {

    if (situation=="look4") {
        situation = "locked5";
        look4.style.display = "none";
        locked5.style.display = "block";
        optionOne.innerHTML = "it's not done";
        optionTwo.innerHTML = "reload the page and try another path";
    }
    if (situation=="slip3") {
        situation = "look4";
        slip3.style.display = "none";
        look4.style.display = "block";
        optionOne.innerHTML = "go in";
        optionTwo.innerHTML = "walk away";
    }
    if (situation=="drinkbottle2") {
        situation = "slip3";
        drinkbottle2.style.display = "none";
        slip3.style.display = "block";
        optionOne.innerHTML = "go inspect the car";
        optionTwo.innerHTML = "yell at the car";
    }
    if (situation=="bottle") {
        situation = "drinkbottle2";
        bottle1.style.display = "none";
        drinkbottle2.style.display = "block";
        optionOne.innerHTML = "drink?";
        optionTwo.innerHTML = "put it back down";
    }
    if (situation=="restart") {
        situation = "bottle";
        bottle1.style.display = "block";
        drinkbottle2.style.display = "none";
        gunneddown2.style.display = "none";
        gunneddown3.style.display = "none";
        slip3.style.display = "none";
        yell4.style.display = "none";
        look4.style.display = "none";
        locked5.style.display = "none";
        optionOne.innerHTML = "Pick it up";
        optionTwo.innerHTML = "leave it";
    }
    
});

optionTwo.addEventListener("click", function() {
    if (situation=="bottle") {
        situation = "restart";
        bottle1.style.display = "none";
        gunneddown2.style.display = "block";
        optionOne.innerHTML = "restart";
        optionTwo.innerHTML = "good job";    
    }
    if (situation=="drinkbottle2") {
        situation = "restart";
        drinkbottle2.style.display = "none";
        gunneddown3.style.display = "block";
        optionOne.innerHTML = "restart";
        optionTwo.innerHTML = "good job";    
    }
    if (situation=="slip3") {
        situation = "restart";
        slip3.style.display = "none";
        yell4.style.display = "block";
        optionOne.innerHTML = "restart";
        optionTwo.innerHTML = "good job";    
    }
    if (situation=="look4") {
        situation = "restart";
        yell4.style.display = "none";
        walkaway5.style.display = "block";
        optionOne.innerHTML = "restart";
        optionTwo.innerHTML = "good job";
    }
    
});


