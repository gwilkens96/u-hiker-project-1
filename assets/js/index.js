//get elements by id
var searchForm = $('#searchForm');
var search_input = $('#search_input');
var search_results = $('#search_results');
let searchHistoryEl = $('#searchHistory');
let searchHistoryButtonsEl = $('#search_history_buttons');
let searchCountSpanEl = $('#searchCountSpan');

let cities = [];
let parks = [];
let locallyStoredParks = [];
let storedParks = [];

const renderCities = () => {
    searchHistoryEl.innerHtml = '';
    searchCountSpanEl.textContent = cities.length;

    for (let i = 0; i < cities.length; i++){
        let city = cities[i];

        $('searchHistoryButtonsEl').empty();

        let li = document.createElement('li');
        li.textContent = city;
        li.setAttribute('data-index', i);
        li.setAttribute('class', 'list-group-item list-group-item-action');
        li.setAttribute('href', './results.html');
        $('search_history_buttons').append(li);
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

//button should display local parks in the area

//when local parks display you should be able to click on them and the page should change to results.html

