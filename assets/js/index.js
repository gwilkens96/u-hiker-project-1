//get elements by id
var searchForm = $('#searchForm');
var search_input = $('#search_input');
var search_results = $('#search_results');
let searchHistory = document.querySelector('#searchHistory')
let searchHistoryButtonsEl;
let searchCountSpanEl = $('#searchCountSpan');
let resultsDisplayPanel2 = document.querySelector('#resultsDisplayPanel2');

let cities = [];
let parks = [];
let locallyStoredParks = [];
let storedParks = [];



const renderCities = () => {
    searchHistory.innerHTML = '';
    for (let i = 0; i < cities.length; i++){
        let city = cities[i];
        let button = document.createElement('button');
        button.setAttribute('class', 'btn btn-success button' + [i]);
        button.setAttribute('id', 'search_history_buttons');
        button.textContent = city;
        searchHistory.appendChild(button);
        button.addEventListener('click', callHistory);
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
    console.log('dataStored')
}
function displayData(parks) {
    // let parks = (JSON.parse(localStorage.getItem('storedParks')))
    console.log(parks);
    let numberOfParks = parks.length;
    for (let i = 0; i < numberOfParks; i++){
        let park = parks[i];
        console.log(park);
        let parkName = park.fullName;
        let parkDescription = park.description; 
        let parkAddress = park.addresses[0];
        let parkPictures = park.images[i];
        let parklatitude = park.latitude;
        let parklongitude = park.longitude;
        let address1 = parkAddress.line1;
        let address2 = parkAddress.line2;
        let address3 = parkAddress.line3;
        let parkCity = parkAddress.city; 
        let state = parkAddress.stateCode; 
        let postalCode = parkAddress.postalCode;

        console.log(parkAddress)
        console.log(parklongitude)
        console.log(parklatitude)
        console.log(parkPictures)
        console.log(parkDescription)
        console.log(parkName)

        let resultCard = document.createElement('div');
        resultCard.classList.add('card', 'bg-white', 'text-black', 'mb-3');

        let resultBody = document.createElement('div');
        resultBody.classList.add('card-body');
        resultCard.append(resultBody);

        let h3 = document.createElement('h3');
        h3.textContent = parkName;
        let p = document.createElement('p');
        p.textContent = parkDescription;
        let p2 = document.createElement('p');
        p2.textContent = parklatitude + ', ' + parklongitude;
        let h4El1 = document.createElement('h4');
        h4El1.textContent = address1;
        let h4El2 = document.createElement('h4');
        h4El2.textContent = address2;
        let h4El3 = document.createElement('h4');
        h4El3.textContent = address3; 
        let h4El4 = document.createElement('h4');
        h4El4.textContent = parkCity + ', ' + state;
        let h4El6 = document.createElement('h4');
        h4El6.textContent = postalCode;
        let select = document.createElement('btn');
        select.setAttribute('class', 'btn btn-link btn-success');
        select.setAttribute('data-index', [i]);
        select.setAttribute('value', p2.textContent);
        select.textContent = 'Select';
        select.addEventListener('click', selectionButtonHandler);
        
        resultBody.append(h3);
        resultBody.append(h4El1);
        resultBody.append(h4El1);
        resultBody.append(h4El2);
        resultBody.append(h4El3);
        resultBody.append(h4El4);
        resultBody.append(h4El6);
        resultBody.append(p);
        resultBody.append(p2);
        resultBody.append(select);
        resultsDisplayPanel2.append(resultCard);
        // resultsDisplayPanel2.append(h3);
        // resultsDisplayPanel2.append(h4El1);
        // resultsDisplayPanel2.append(h4El2);
        // resultsDisplayPanel2.append(h4El3);
        // resultsDisplayPanel2.append(h4El4);
        // resultsDisplayPanel2.append(h4El6);
        // resultsDisplayPanel2.append(p);
        // resultsDisplayPanel2.append(p2);
        // resultsDisplayPanel2.append(select);
        
    }
}

function callData (event) {
    event.preventDefault();

    var city = search_input[0].value;
    fetchApi(city);
    if (city === ''){
        console.error('You need a search input value!');
        return;
    }
    cities.push(city);
    search_input[0].value = '';
    
    storeCities();
    renderCities();
    // displayData();
    // searchHistoryButtonsEl = $('#search_history_buttons');
}

const callHistory = (event) => {
    event.preventDefault();
    console.log('button clicked')
    resultsDisplayPanel2.innerHTML = '';
    console.log(event)
    city = event.target.textContent;
    console.log(city)
    fetchApi(city);
}
//function to get api location data 
function fetchApi(city) {
    resultsDisplayPanel2.innerHTML = ''
    console.log('make an api call')
    fetch("https://jonahtaylor-national-park-service-v1.p.rapidapi.com/parks?stateCode=GA&q="+city, {
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
     displayData(data.data);
    //  for (let i = 0; i < data.data.length; i++){
    //     console.log(data.data[i]);
        
    //     // locallyStoredParks.push(data.data[i]);
    //     // console.log('saving parks')
    //     // saveParks(locallyStoredParks);
    //     // console.log(locallyStoredParks);
    // };
    // displayData(data.data[i]);
 })
 
}

function selectionButtonHandler(event) {
    event.preventDefault();
    let queryString = './results.html'
    location.assign(queryString);
}

search_results.click(callData);
init();
//function to display location data
