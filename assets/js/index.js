//get elements by id
var searchForm = $('#searchForm');
var search_input = $('#search_input');
var search_results = $('#search_results');
let searchHistory = document.querySelector('#searchHistory')
let searchHistoryButtonsEl = $('#search_history_buttons');
let searchCountSpanEl = $('#searchCountSpan');
let resultsDisplayPanel2 = document.querySelector('#resultsDisplayPanel2');

let cities = [];
// let parks = [];
let locallyStoredParks = [];
let storedParks = [];

const renderCities = () => {
    searchHistory.innerHTML = '';
    for (let i = 0; i < cities.length; i++){
        let city = cities[i];
        let button = document.createElement('button');
        button.setAttribute('class', 'btn btn-success');
        button.setAttribute('id', 'search_history_buttons');
        button.textContent = city;
        searchHistory.appendChild(button);
    }
}

const init = () => {
    // let parksToDisplay = JSON.parse('storedParks');

    let storedCities = JSON.parse(localStorage.getItem('cities'));
    console.log(storedCities)

    if(storedCities !== null) {
        cities = storedCities
    }

    renderCities();
}

const storeCities = () => {
    localStorage.setItem('cities', JSON.stringify(cities));
};

const saveParks = (storedParks) => {
    localStorage.setItem('storedParks', JSON.stringify(storedParks));
}
function displayData() {
    parks = (JSON.parse(localStorage.getItem('storedParks')))
    let numberOfParks = parks.length;
    for (let i = 0; i < numberOfParks; i++){
        park = parks[i];
        let parkName = park.fullName;
        let parkDescription = park.description; 
        let parkPictures = park.images[i];
        let parklatitude = park.latitude;
        let parklongitude = park.longitude;
        let parkAddresses = park.addresses[0];
        let address1 = parkAddresses.line3;
        let address2 = parkAddresses.city;
        let state = parkAddresses.stateCode; 
        let postalCode = parkAddresses.postalCode;

        console.log(parkAddresses)
        console.log(parklongitude)
        console.log(parklatitude)
        console.log(parkPictures)
        console.log(parkDescription)
        console.log(parkName)

        let h3 = document.createElement('h3');
        h3.textContent = parkName;
        let p = document.createElement('p');
        p.textContent = parkDescription;
        let p2 = document.createElement('p');
        p2.textContent = parklatitude;
        let p3 = document.createElement('p');
        p3.textContent = parklongitude;
        let h4El1 = document.createElement('h4');
        h4El1.textContent = address1;
        let h4El2 = document.createElement('h4');
        h4El2.textContent = address2; 
        let h4El3 = document.createElement('h4');
        h4El3.textContent = state; 
        let h4El4 = document.createElement('h4');
        h4El4.textContent = postalCode;
        
        resultsDisplayPanel2.append(h3)
        resultsDisplayPanel2.append(h4El1);
        resultsDisplayPanel2.append(h4El2);
        resultsDisplayPanel2.append(h4El3);
        resultsDisplayPanel2.append(h4El4);
        resultsDisplayPanel2.append(p)
        resultsDisplayPanel2.append(p2)
        resultsDisplayPanel2.append(p3)
    }
}

function callData (event) {
    event.preventDefault();

    var city = search_input[0].value;
    fetchApi(city);
    if (city === ''){
        return;
    }
    cities.push(city);
    search_input.value = '';
    storeCities();
    renderCities();
    displayData();
}

const callHistory = (event) => {
    event.preventDefault();
    resultsDisplayPanel2.innerHTML = '';
    displayData();
}
//function to get api location data 
function fetchApi() {
    fetch("https://jonahtaylor-national-park-service-v1.p.rapidapi.com/parks?stateCode=GA&q=city", {
	"method": "GET",
	"headers": {
		"x-api-key": "UvxChY0rHbVLRYwGkgPtnvDIIsDwNaq4axOvWZQz",
		"x-rapidapi-host": "jonahtaylor-national-park-service-v1.p.rapidapi.com",
		"x-rapidapi-key": "2e6933d8d8mshb841bab9a6b2a2bp14f49fjsn4b079c322eb4"
	}
})
.then(function (response){
     return response.json()
 })
 .then(function (data){
     for (let i = 0; i < data.data.length; i++){
        locallyStoredParks.push(data.data[i]);
        saveParks(locallyStoredParks);
    };
 })
}
searchHistoryButtonsEl.click(callHistory);
search_results.click(callData);
init();
//function to display location data
