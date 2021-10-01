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
	fetch('http://www.mapquestapi.com/directions/v2/route?key='+mapQuestKey+'&from=110+S+Main+St,+Hiawassee+GA&to=541+Historic+Hwy,+Demorest+GA')
	.then(function(response){
		console.log(response);
		return response.json();
	})
	.then(function(data){
		console.log(data);
		console.log(data.route);
		console.log(data.route.legs);
		for(let i = 0; i < data.route.legs.length; i++){
			console.log(data.route.legs[0].maneuvers[i].narrative);
		}
	})
	
}

//Get destination location from the index and display in box

//Accept a starting location for directions between start/end

// JavaScript code
function search_origin() {
	var input = document.getElementById('originFormInput').value
	input=input.toLowerCase();
	var x = document.getElementsByClassName('origin');
	
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
	var input = document.getElementById('destinationFormInput').value
	input=input.toLowerCase();
	var x = document.getElementsByClassName('destination');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="list-item";				
		}
	}
}

// const getMapData = (mapData) => {

// }


//Functions to display the route directions from api
