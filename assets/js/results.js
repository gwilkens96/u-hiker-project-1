//Javascript file for results page to display the resulting route
let startingLocation; //Needs Street #+Street Name,+City+State Abbreviation
let endingLocation;
let mapQuestKey = "zNckYjgkLkSAXpgDGRxBBLNJ9JQI78fG";
let search_origin_inputEl = document.querySelector('#originFormInput');
let destination_inputEl = document.querySelector('#destinationFormInput');
let directionsEl = document.querySelector('#directions');
//Button to return to the index page

function returnButton(event) {
	event.preventDefault();
    window.location.href="index.html";
}
//Button to plan the route and give directions


function planButton(event){
	event.preventDefault();
	console.log('button clicked');
	let origin = search_origin_inputEl.value;
	let destination = destination_inputEl.value;
	fetchMapQuestApi(origin, destination);
	search_origin_inputEl = '';
	destination_inputEl = '';
}

function fetchMapQuestApi (startingLocation, endingLocation) {
	console.log('making api call');
	console.log(startingLocation);
	console.log(endingLocation);
	fetch('http://www.mapquestapi.com/directions/v2/route?key='+ mapQuestKey +'&from=' + startingLocation + '&to=' + endingLocation)
	.then(function(response){
		console.log(response);
		return response.json();
	})
	.then(function(data){
		console.log('retrieving api data');
		console.log(data);
		console.log(data.route);
		console.log(data.route.legs);
		for(let i = 0; i < data.route.legs.length; i++){
			// console.log(data.route.legs[0].maneuvers);
			displayDirections(data.route.legs[0].maneuvers);
		}
	})
}

function displayDirections (maneuvers) {
	console.log(maneuvers);
	let numberOfManeuvers = maneuvers.length;
	for (let i = 0; i < numberOfManeuvers; i++){
		let maneuver = maneuvers[i];
		console.log(maneuver);

		let routeNarrative = maneuver.narrative;

		let li = document.createElement('li');
		li.textContent = routeNarrative;

		directionsEl.append(li);
	}

}

//Get destination location from the index and display in box

//Accept a starting location for directions between start/end

// JavaScript code

document.getElementById("returnBtn").addEventListener("click", returnButton);
document.getElementById("planBtn").addEventListener("click", planButton);
// const getMapData = (mapData) => {

// }


//Functions to display the route directions from api
