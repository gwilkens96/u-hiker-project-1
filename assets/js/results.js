//Javascript file for results page to display the resulting route
var startingLocation= ""; //Needs Street #+Street Name,+City+State Abbreviation
var endingLocation = ""; 
var mapQuestKey = "zNckYjgkLkSAXpgDGRxBBLNJ9JQI78fG";
//Button to return to the index page

document.getElementById("returnBtn").addEventListener("click", returnButton);

function returnButton() {
    window.location.href="index.html";
}
//Button to plan the route and give directions
document.getElementById("planBtn").addEventListener("click", planButton);

function planButton(){
    //Using API plan out directions for display
    //Verify button is functional
    window.location.href="http://www.google.com";
}

//Get destination location from the index and display in box

//Accept a starting location for directions between start/end
<<<<<<< HEAD
fetch('http://www.mapquestapi.com/directions/v2/route?key='+mapQuestKey+'&from=110+S+Main+St,+Hiawassee+GA&to=541+Historic+Hwy,+Demorest+GA')
=======

// JavaScript code
function search_origin() {
	let input = document.getElementById('originFormInput').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('origin');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="list-item";				
		}
	}
}

function search_destination() {
	let input = document.getElementById('destinationFormInput').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('destination');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="list-item";				
		}
	}
}
>>>>>>> 95db5f28f7dbf4cc915d8cc8d14734d5bffeb204

fetch('http://www.mapquestapi.com/directions/v2/route?key='+mapQuestKey+'&from=110+S+Main+St,+Hiawassee+GA&to=541+Historic+Hwy,+Demorest+GA')

//Functions to display the route directions from api
let app = document.querySelector('#directions');