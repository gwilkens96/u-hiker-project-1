//get elements by id
var searchForm = $('#searchForm');
var search_input = $('#search_input');
var search_results = $('#search_results');
let searchHistory = document.querySelector('#searchHistory')
let searchHistoryButtonsEl = $('#search_history_buttons');
let searchCountSpanEl = $('#searchCountSpan');

let cities = [];
let parks = [];
let locallyStoredParks = [];
let storedParks = [];

const renderCities = () => {
    searchHistory.innerHTML = '';
    for (let i = 0; i < cities.length; i++){
        let city = cities[i];
        
        let a = document.createElement('a');
        
        a.href = './results.html';

        let button = document.createElement('button');
        button.setAttribute('class', 'btn btn-link mt-2');
        button.addEventListener('click', callData)
    
        button.textContent = city;
        button.value = button.textContent
        
        button.appendChild(a);
        searchHistory.appendChild(button);
        // searchHistory.appendChild(li);
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
     for (let i = 0; i < data.length; i++) {
        // console.log(data)
     }
    //  console.log(data.data)
     for (let i = 0; i < data.data.length; i++){
        locallyStoredParks.push(data.data[i]);
        saveParks(locallyStoredParks);
    };
 })
}

search_results.click(callData);
init();
//function to display location data
function displayData(parks) {
    

}