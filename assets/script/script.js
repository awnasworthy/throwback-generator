let userInputEl = document.querySelector("#user-form");
let birthdateInputEl = document.querySelector("#birthdate-input");
let newsContainerEl = document.querySelector("#news");
let moviesContainerEl = document.querySelector("#movies");
let musicContainerEl = document.querySelector("#albums");

let newsArray = [];
let musicArray = [];
let movieArray = [];


let formSubmitHandler = function(event) {
    event.preventDefault();
    let birthdate1 = birthdateInputEl.value.slice(0, 4);
    let birthdate2 = birthdateInputEl.value.replaceAll('-', '');
    getIMDB(birthdate1);
    getNYTimes(birthdate2);
    getMusic(birthdate1);
};


let getIMDB = function(birthdate1) {
    let requestUrl1 = "https://imdb-api.com/API/AdvancedSearch/k_y2l2dke4?title_type=feature&release_date=" + birthdate1 + "-01-01," + birthdate1 + "-12-31";

    fetch(requestUrl1)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // console.log(data);
            createMovies(data);
        })
};


let getNYTimes = function(birthdate2) {
    let requestUrl2 = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&begin_date=" + birthdate2 + "&end_date=" + birthdate2 + "&api-key=9lT9Z3cCgK58xioXvJi1qjAjO1r1Etbe";
    
    fetch(requestUrl2)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // console.log(data);
            createNews(data);
        })
};


var getMusic = function(birthdate1) {
    musicUrl = 'https://musicbrainz.org/ws/2/recording/?query=firstreleasedate:' + birthdate1 + '&country=us&limit=100&fmt=json'

    fetch(musicUrl)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    createMusic(data);
                });
            }
        });
};


let createMovies = function(data) {
    var results = data.results;
    var movieList = [];
    // loop through array of movies given by API and randomly select 10 - and then append them to the movie container
    for (var i = 0; i < 10; i++) {
        var movies = results[Math.floor(Math.random() * results.length)]
        movieList.push(movies);

        var title = movieList[i].title;
        var plot = movieList[i].plot;

        // create the elements to hosue the data
        var movieEl = document.createElement('div');
        // movieEl.classList = "CLASS_PLACEHOLDER";
        movieEl.innerHTML = "<h4>" + title + "</h4> <p>" + plot + "</p>";

        // add muisc items to array to store
        movieArray.push({
            title: title,
            plot: plot
        });

        moviesContainerEl.appendChild(movieEl);
    }
    console.log(movieArray);
    localStorage.setItem("Movies", JSON.stringify(movieArray));
};


let createNews = function(data) {
    var docs = data.response.docs;
    // loop through array of data and randomly select news articles
    for (var i = 0; i < docs.length; i++) {
    var headline = data.response.docs[i].headline.main;
    var abstract = data.response.docs[i].abstract;

    // create the elements to house the data
    var newsEl = document.createElement('div');
    // newsEl.classList = "CLASS_PLACEHOLDER";
    newsEl.innerHTML = "<h4>" + headline + "</h4> <p>" + abstract + "</p>";

    // add news items to array to store
    newsArray.push({
        headline: headline,
        abstract: abstract
    });

    newsContainerEl.appendChild(newsEl);
    };
    console.log(newsArray);
    // save newsArray to local storage
    localStorage.setItem("News", JSON.stringify(newsArray));
};


let createMusic = function(data) {
    var recordings = data.recordings;
    var albums = [];
    // loop through array of data and randomly select 10 albums
    for (var i = 0; i < 10; i++) {
        var album = recordings[Math.floor(Math.random() * recordings.length)]
        var title = album.title;
        var name = album["artist-credit"][0].name;
        // push the randomly selected index into a new empty array   
        albums.push(album);

        // create the elements to house the data
        var musicEl = document.createElement('div');
        // newsEl.classList = "CLASS_PLACEHOLDER";
        musicEl.innerHTML = "<h4>" + name + "</h4> <p>" + title + "</p>";

        // add muisc items to array to store
        musicArray.push({
            name: name,
            title: title
        });

        musicContainerEl.appendChild(musicEl);
    }
    console.log(musicArray);
    // save newsArray to local storage
    localStorage.setItem("Music", JSON.stringify(musicArray));
};


// Launches formSubmitHandler() function
userInputEl.addEventListener("submit", formSubmitHandler);