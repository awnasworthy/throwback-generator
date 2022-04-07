let userInputEl = document.querySelector("#user-form");
let birthdateInputEl = document.querySelector("#birthdate-input");

var requestUrl1 = "https://imdb-api.com/API/AdvancedSearch/k_y2l2dke4?title_type=feature&release_date=1979-07-21,1980-07-21"
var requestUrl2 = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&begin_date=19790721&end_date=19790721&api-key=9lT9Z3cCgK58xioXvJi1qjAjO1r1Etbe"

let formSubmitHandler = function(event) {
    event.preventDefault();
    let birthdate = birthdateInputEl.value.replaceAll('-', '')
    console.log(birthdate);
};

// Launches formSubmitHandler() function
userInputEl.addEventListener("submit", formSubmitHandler);

fetch(requestUrl1)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });
fetch(requestUrl2)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });