var map = L.map('map').locate({setView: true, maxZoom: 13});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(map);

    }   

map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    maxZoom: 18,
    id: 'wiigolas.p7idlkkp',
    accessToken: 'pk.eyJ1Ijoid2lpZ29sYXMiLCJhIjoiY2lreHYxejNvMDA0NndsbTRmejl4NndqMSJ9.5hfLbJnXbAsfsPRT3V4W4Q'
}).addTo(map);

/*
$.getJSON('js/restaurants.json', function (json) {
    var restaurang = [];
    for (var key in json) {
        if (json.hasOwnProperty(key)) {   
                var item = json[key];
            var info = "<p>Namn: " + item.name + "</p><p>Betyg: " + item.rating + "/5</p><button ng-click='count = count + 1' ng-init='count=0'>Rösta</button>";
                marker = new L.marker([item.lat,item.long])
                    .bindPopup(info)
                    .addTo(map);
        } 
    }  
});

*/