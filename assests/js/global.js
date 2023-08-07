'use strict';

// add event
const addEventOnElements = function(elements, eventType, callback){
    for (const elem of elements) {
        elem.addEventListener(eventType, callback);
    }
}

// search box for mobile

const searchBox=document.querySelector("[search-box]");
const searchTogglers =document.querySelectorAll("[search-toggler]");

addEventOnElements(searchTogglers, "click", function(){
    searchBox.classList.toggle("active");
});
