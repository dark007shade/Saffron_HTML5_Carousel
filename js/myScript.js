/* jshint browser: true */
/* globals $: false */

//Index starts with 0, not 1

//Show first carousel item when page is loaded
var itemIndex = 0;
selectCarouselItems(itemIndex);

// Arrow controls
// Forward (+1) if right, back (-1) if left
function changeItem(n) {
    selectCarouselItems(itemIndex += n);
}

// Dot controls
// Show item corresponding with parameter in selected dot's function
function showCurrentItem(n) {
    selectCarouselItems(itemIndex = n);
}

// Select carousel item to be used
function selectCarouselItems(n) {
    const carouselItems = $(".carousel_item");
    const dots = $(".nav_dot");

    //Go to first item in carousel if arrow selection's index greater than or equal to total number of items
    if (n >= carouselItems.length) {
        itemIndex = 0;
    }
    //Go to last item in carousel if arrow selection's index is less than 0
    if (n < 0) {
        itemIndex = carouselItems.length - 1;
    }
    let item;
    //Hide all items
    for (item = 0; item < carouselItems.length; item++) {
        //console.log(carouselItems[item]);
        carouselItems[item].style.display = "none";
    }
    //Remove 'active' class from all dots
    for (item = 0; item < dots.length; item++) {
        //console.log(dots[item].className);
        dots[item].className = dots[item].className.replace(" active ", "");
        //console.log(dots[item].className);
    }
    //Show item with selected index
    carouselItems[itemIndex].style.display = "flex";
    //Add 'active' class to dot with selected index
    dots[itemIndex].className += " active ";
    //console.log(itemIndex);
}