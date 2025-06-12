// Declare variables below to save the different divs of your story.
let situation = "bottle"
let optionOne = document.querySelector(".option-one");
let optionTwo = document.querySelector(".option-two");
let bottle1 = document.querySelector(".bottle1");
let drinkbottle2 = document.querySelector(".drinkbottle2");
let gunneddown2 = document.querySelector(".gunneddown2");
let gunneddown3 = document.querySelector(".runover3");
let slip3 = document.querySelector(".slip3");
let yell4 = document.querySelector(".yell4");
let look4 = document.querySelector(".look4");
let locked5 = document.querySelector(".locked5");

bottle1.style.display = "block";

optionOne.addEventListener("click", function() {
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
    
    
    
});

optionTwo.addEventListener("click", function() {
    if (situation=="bottle") {
        situation = "restart";
        bottle1.style.display = "none";
        gunneddown2.style.display = "block";
        optionOne.innerHTML = "restart";
        optionTwo.style.display = "none";
    }
    if (situation=="drinkbottle2") {
        situation = "restart";
        drinkbottle2.style.display = "none";
        gunneddown3.style.display = "block";
        optionOne.innerHTML = "restart";
        optionTwo.style.display = "none";
    }
    if (situation=="slip3") {
        situation = "restart";
        slip3.style.display = "none";
        yell4.style.display = "block";
        optionOne.innerHTML = "restart";
        optionTwo.style.display = "none";
    }
    
});






// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


// INSERT_VARIABLE.addEventListener('click', function(){

// });

// INSERT_VARIABLE.addEventListener('click', function(){

// });


// INSERT_VARIABLE.addEventListener('click', function(){

// });