var year = 1991;

var getUrl = function() {
    musicUrl = 'https://musicbrainz.org/ws/2/recording/?query=firstreleasedate:' + year + '&country=us&limit=100&fmt=json'

    fetch(musicUrl)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    var recordings = data.recordings;
                    console.log(recordings);
                    var albums = [];
                    for (var i = 0; i < 10; i++) {
                        var album = recordings[Math.floor(Math.random() * recordings.length)]
                        albums.push(album);
                        // albums += recordings[Math.floor(Math.random() * recordings.length)];
                    // console.log(albums);
                    console.log(albums[i]);
                    }
                   
                });
                
            }
        });



};


getUrl();
let userInputEl = document.querySelector("#user-form");
let birthdateInputEl = document.querySelector("#birthdate-input");

let formSubmitHandler = function(event) {
    event.preventDefault();
    let birthdate1 = birthdateInputEl.value.slice(0, 4);
    let birthdate2 = birthdateInputEl.value.replaceAll('-', '');
    getIMDB(birthdate1);
    getNYTimes(birthdate2);
};

let getIMDB = function(birthdate1) {
    let requestUrl1 = "https://imdb-api.com/API/AdvancedSearch/k_y2l2dke4?title_type=feature&release_date=" + birthdate1 + "-01-01," + birthdate1 + "-12-31";

    fetch(requestUrl1)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            localStorage.setItem("imdbArray", JSON.stringify(data));
        })
};

let getNYTimes = function(birthdate2) {
    let requestUrl2 = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&begin_date=" + birthdate2 + "&end_date=" + birthdate2 + "&api-key=9lT9Z3cCgK58xioXvJi1qjAjO1r1Etbe";
    
    fetch(requestUrl2)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            localStorage.setItem("nytimesArray", JSON.stringify(data));
        })
};

// Launches formSubmitHandler() function
userInputEl.addEventListener("submit", formSubmitHandler);
