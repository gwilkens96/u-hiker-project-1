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
     console.log(data)
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

//function to display location data
function displayData() {

}

// add event listener for button click
search_results.click(callData);


//button should display local parks in the area

//when local parks display you should be able to click on them and the page should change to results.html

