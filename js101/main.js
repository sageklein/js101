console.log("hello main.js, Great job Sage!");

let newName = "Sage";

console.log("My name is", newName);

/*
    This code will only return the first section component
    even though there are three components with the same
    class
*/
const sectionEl = document.querySelector(".article__section")

/*
    This code will only return the third section component
*/
const footerEl = document.querySelector(".article__footer")

/*
    Get reference to the section with the class of `smallText`
    and remove that class. Then add a new class of `largeText`
*/
const smallTextEl = document.querySelector(".smallText")
console.log("what is smallText", smalltextEl);
smallTextEl.classList.remove("smallText")
smallTextEl.classList.add("largeText")

ahEl = document.querySelectorAll(".article_header");
console.log("ahEl1", ahEl);

ahEl[2].setAtribute(color );