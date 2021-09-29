//Javascript file for results page to display the resulting route

//Button to return to the index page

document.getElementById("returnBtn").addEventListener("click", returnButton);

function returnButton() {
    window.location.href="index.html";
}
//Button to plan the route and give directions
document.getElementById("planBtn").addEventListener("click", planButton);

function planButton(){
    //Using API plan out directions for display
}


//Get destination location from the index and display in box

//Accept a starting location for directions between start/end

//Functions to display the route directions from api