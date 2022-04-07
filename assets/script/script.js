var year = 1991;

var getUrl = function() {
    musicUrl = 'https://musicbrainz.org/ws/2/recording/?query=firstreleasedate:' + year + '&country=us&&limit=100&fmt=json'

    fetch(musicUrl)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    var recordings = data.recordings;
                    // for (var i = 0; i < 10; i++) {
                        var albums = "";
                        albums += recordings[Math.floor(Math.random()*recordings.length)];
                    // }
                    console.log(albums);
                   
                });
                
            }
        });



};


getUrl();