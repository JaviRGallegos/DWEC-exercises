var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};


//APARTADO 1

if (navigator.geolocation !== null){
    document.write('Geoloc works');
}
else{
    document.write("Geoloc doesn't work");
}

function success(pos) {
var crd = pos.coords;
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    var map = new H.Map(
        document.getElementById('mapContainer'),
        defaultLayers.vector.normal.map,
        {
          zoom: 14,
          center: { lat:crd.latitude, lng: crd.longitude}
        }
    );
    console.log('Your current position is: ' + crd.latitude + ', ' + crd.longitude + ' ~ ' + crd.accuracy + ' meters');
}
//APARTADO 2

//document.write('Your current position is: ' + crd.latitude + ',' + crd.longitude + '~' + crd.accuracy + 'meters');

//APARTADO 3

function ERROR(err) {
    switch (err.code){
        case 'PERMISSION_DENIED':
            console.warn("Your page hasn't been permited to access geoloc");
            break;
        case 'POSITION_UNAVAILABLE':
            console.warn("Your position isn't available");
            break;
        case 'TIMEOUT':
            console.warn("Loading took way too long");
    }
}

var platform = new H.service.Platform({
    'apikey': 'efjXR5_WEj2iVOx3za268sk1vf0sjLEfcJSnJxBKuL0'
});

// Obtain the default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();



navigator.geolocation.getCurrentPosition(success, ERROR, options);

//APARTADO 4

//navigator.geolocation.watchPosition(success, ERROR);

//APARTADO 5
