/**
 * Name: Character Counter
 * Description: Count characters in a paragraph or input box
 * Author: Shrikumar Infotech
 * Author URI: dev@shrikumarinfotech.com
 * License: GPLv2.0 or later
 * License URI: http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

'use strict';

// Define character counter function
function charCount(){
    // console.log('character count');

    // Define the variables
    let charElements = {};
    let totalElements = {};
    let displayElements = {};
    let alldisplayElements = {};
    
    // Define function for reload data
    function reloadData(){
        // Define character elements
        charElements = document.getElementsByClassName('module-char-count');
        // Convert them into an array
        totalElements = Array.from(charElements);
        // console.log(totalElements);

        // Define the display elements
        displayElements = document.getElementsByClassName('paragraph-char-count');
        // Convert them into an array
        alldisplayElements = Array.from(displayElements);
    }
    reloadData();

    // Iterate through each element, get the text 
    // and count the number of characters
    function doTheCount(){

        totalElements.forEach(function(element, index){
            // count the characters
            element.onkeyup = function(){
                // console.log(element.value.length);
                alldisplayElements[index].innerHTML = element.value.length;
            };
            // display the counter by default for paragraph or filled input/text areas
            // console.log(alldisplayElements);
            alldisplayElements[index].innerHTML = element.innerText.length;
        });
    }
    doTheCount();

}

charCount();