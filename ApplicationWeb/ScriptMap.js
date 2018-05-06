
var mymap = L.map('mapLannion').setView([20.5, 20], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoic3RhdHJvdXRlIiwiYSI6ImNqZHZ0bnIzazA0dGszMHFsdW95ZTQweXEifQ.t3nHSyxoTtRKYdvoqNvyZg'
}).addTo(mymap);

var marker = L.marker([48.7, -3.461]).addTo(mymap);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();