// Liste de marqueur, ajouter des capteurs ici
var ListeCapteurs = L.layerGroup();

// Créer une nouvelle carte à partir de l'id "mapLannion"
var mymap = L.map('mapLannion', {
	center: [48.732, -3.461], 
	zoom: 13, 
	layers: [ListeCapteurs]
});

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoic3RhdHJvdXRlIiwiYSI6ImNqZHZ0bnIzazA0dGszMHFsdW95ZTQweXEifQ.t3nHSyxoTtRKYdvoqNvyZg'
}).addTo(mymap);


// Icon definition and style
var IconeCapteur = L.icon({
    //iconUrl: 'Icon/sensor_icon.png',

    iconSize:     [50, 55], // size of the icon
    iconAnchor:   [30, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

// Marker with popup and coord
var TestMarqueur = L.marker([48.725, -3.461]).addTo(ListeCapteurs);
TestMarqueur.bindPopup("Capteur n°1");

// Overlay, needed for hiding location icon of sensors
var overlay = {
	"Capteurs": ListeCapteurs 
};

L.control.layers(null, overlay).addTo(mymap);

// Function click on map, will show popup with coord of the clicked area
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);

