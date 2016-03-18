var map = L.map('map', { zoomControl: false }).locate({setView: true, maxZoom: 13});

new L.Control.Zoom({ position: 'bottomleft' }).addTo(map);

new L.control.locate({position: 'bottomleft'}).addTo(map);

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng, {icon:redIcon}).addTo(map);

    }   

map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}
//test marker and popup
map.on('locationerror', onLocationError);
var marker = L.marker([55.7597, 13.0074]).addTo(map);
marker.bindPopup("<b>LÖDDEKÖPINGE!</b>").openPopup();
var marker = L.marker([57.916, 13.877]).addTo(map);

//costum marker with location
var greenIcon = L.icon({
    iconUrl: 'images/marker-icon-coffee-red.png',

    iconSize:     [25, 41], // size of the icon
    iconAnchor:   [12, 41], // point of the icon which will correspond to marker's location
});

var redIcon = L.icon({
    iconUrl: 'images/marker-icon-red.png',

    iconSize:     [25, 41], // size of the icon
    iconAnchor:   [12, 41], // point of the icon which will correspond to marker's location
});

L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map);


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    maxZoom: 18,
    id: 'wiigolas.p7idlkkp',
    accessToken: 'pk.eyJ1Ijoid2lpZ29sYXMiLCJhIjoiY2lreHYxejNvMDA0NndsbTRmejl4NndqMSJ9.5hfLbJnXbAsfsPRT3V4W4Q'
}).addTo(map);

//Function for creating map markers and marker popup from json data
function placeMarker(json) {
    //console.log(json);
    for (var key in json) {
		//one restaurant object containing all restaurant data
        var item = json[key];
		//create popup info
        var info = '<p>' + item.name + '</p><p>' + item.rating + '</p><img src="' + item.photo + '">';
		//add marker
        marker = new L.marker([item.lat,item.long]).bindPopup(info).addTo(map);
    }  
};