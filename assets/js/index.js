//get elements by id
var searchForm = $('#searchForm');
var search_input = $('#search_input');
var search_results = $('#search_results');
let searchHistoryEl = $('#searchHistory');
let searchHistoryButtonsEl = $('#search_history_buttons');
let searchCountSpanEl = $('#searchCountSpan');

let storedCities = [];
let suggestedCities = [];

const renderCities = (searchCount) => {
    searchHistoryButtonsEl.innerHtml = '';
    for (let i = 0; i < searchCount; i++){
        let city = storedCities[i];

        $('searchHistoryButtonsEl').empty();

        let li = document.createElement('li');
        li.textContent = city;
        li.setAttribute('data-index', i);
        li.setAttribute('class', 'list-group-item list-group-item-action');
        li.setAttribute('href', './results.html');
        $('search_history_buttons').appendChild();
    }
}

//function to call location data
//prevent default
function callData (event) {
    event.preventDefault();

    var city = search_input[0].value;

    fetchApi(city);

    console.log(city);
    displayData();
    //this is to save the users search history to local storage
    //savePreferences(city);
    //this is to clear the input search bar
   // search_input = '';
}

const init = () => {
    let searchCount = storedCities.length;
    if (searchCount !== (null || undefined)) {
        renderCities();
    } else {
        let storedCities = suggestedCities;
    }

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
        console.log(data.data[i]);
        console.table(data.data[i]);
    }
 })
    //var api = 'https://developer.nps.gov/api/v1/activities/parks?id=hiking&q=city&sort=GA&api_key=UvxChY0rHbVLRYwGkgPtnvDIIsDwNaq4axOvWZQz'
    //var hostUrl = 'https://enigmatic-citadel-24557.herokuapp.com/';
    // fetch(api)  
    // .then(function (response){
    //     return response.json()
    // })
    // .then(function (data){
    //     console.log(data)
    // })

//     .then(data => {
//      displayData(data);
//      console.log(data);
// })
}
// function to save the users searches to local storage 
<<<<<<< HEAD
const savePreferences = (storedCities) => {
    localStorage.setItem('storedCities', JSON.stringify(storedCities));
};

// function to retrieve user's search history 
const getPreferences = (storedCities) => {
    storedCities = JSON.parse(localStorage.getItem(storedCities));
    console.log(storedCities)
};

//function to display location data
function displayData(data) {
    let parksData = [];
    for (let i = 0; i < data.length; i++){
        parksData.push(data[i]);
        console.log(parksData)
    }
=======
      const savePreference = () => {
     storedCities = localStorage.setItem("storedCities", JSON.stringify(storedCities));
 };

// function to retrieve user's search history 
 const getPreferences = () => {
     storedCities = JSON.parse(localStorage.getItem("storedCities"));
 };

//function to display location data
function displayData(data) {
    $('#resultsDisplayPanel2').append(
        `<div> City: ${data.city}</div>
         <div> Address: ${data.addresses}</div>
        `
    );

>>>>>>> e50cd7350b329f9ead5917b0a6e1ec95169c7ced
}

// add event listener for button click
search_results.click(callData);
init();


//button should display local parks in the area

//when local parks display you should be able to click on them and the page should change to results.html

