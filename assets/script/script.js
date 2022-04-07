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

var requestUrl1 = "https://imdb-api.com/API/AdvancedSearch/k_y2l2dke4?title_type=feature&release_date=1979-07-21,1980-07-21"
var requestUrl2 = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&begin_date=19790721&end_date=19790721&api-key=9lT9Z3cCgK58xioXvJi1qjAjO1r1Etbe"

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
