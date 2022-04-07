let userInputEl = document.querySelector("#user-form");
let birthdateInputEl = document.querySelector("#birthdate-input");

var requestUrl1 = "https://imdb-api.com/API/AdvancedSearch/k_y2l2dke4?title_type=feature&release_date=1979-07-21,1980-07-21"

let formSubmitHandler = function(event) {
    event.preventDefault();
    let birthdate = birthdateInputEl.value.replaceAll('-', '');
    getNYTimes(birthdate);
};

let getNYTimes = function(birthdate) {
    let requestUrl2 = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&begin_date=" + birthdate + "&end_date=" + birthdate + "&api-key=9lT9Z3cCgK58xioXvJi1qjAjO1r1Etbe";
    
    fetch(requestUrl2)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
})};


// Launches formSubmitHandler() function
userInputEl.addEventListener("submit", formSubmitHandler);

fetch(requestUrl1)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
});
