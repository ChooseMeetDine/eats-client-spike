var map = L.map('map').locate({setView: true, maxZoom: 13});
var greenIcon = L.icon({
    iconUrl: 'c.png',

    iconSize:     [38, 38], // size of the icon
    iconAnchor:   [19, 38], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng, {icon: greenIcon}).addTo(map);

    }   

map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'wiigolas.p7idlkkp',
    accessToken: 'pk.eyJ1Ijoid2lpZ29sYXMiLCJhIjoiY2lreHYxejNvMDA0NndsbTRmejl4NndqMSJ9.5hfLbJnXbAsfsPRT3V4W4Q'
}).addTo(map);


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

