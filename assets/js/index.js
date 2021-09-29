//get elements by id
var searchForm = $('#searchForm');
var search_input = $('#search_input');
var search_results = $('#search_results');
//function to call location data
//prevent default
function callData (event) {
    event.preventDefault();

    var city = search_input[0].value;

    fetchApi(city);

    console.log(city);


}

//function to get api location data 
function fetchApi() {
    var api = 'https://ridb.recreation.gov/api/v1/recareas?limit=50&offset=0&state=GA&lastupdated=10-01-2018&apikey=5aae3455-1ab0-46a0-aa56-7b199d2f36ef'
    //var hostUrl = 'https://enigmatic-citadel-24557.herokuapp.com/';
    fetch(api)  
    .then(function (response){
        return response.json()
    })
    .then(function (data){
        console.log(data)
    })

//     .then(data => {
//      displayData(data);
//      console.log(data);
// })
}

//function to display location data
function displayData() {

}

// add event listener for button click
search_results.click(callData);


//button should display local parks in the area

//when local parks display you should be able to click on them and the page should change to results.html

