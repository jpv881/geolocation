
if("geolocation" in navigator){
    let imagen = document.getElementById('imagen');
    // var latitud;
    // var longitud;
    // var cadena;
    navigator.geolocation.getCurrentPosition(function(posicion){
        let latitud = posicion.coords.latitude;
        let longitud = posicion.coords.longitude;
        console.log("Posición latitud: "+posicion.coords.latitude+" Posición longitud: "+posicion.coords.longitude);
        let cadena = "https://maps.googleapis.com/maps/api/staticmap?&zoom=13&markers=color:red|"+latitud+","+longitud+"&size=500x500";
        imagen.setAttribute("src", cadena);
    },function(error){
        console.log(error);
    },{enableHighAccuracy: true, timeout: 60000, maximumAge: 10000})
}else{
    console.log("no hay geolocalizacion");
}

// var watchID = navigator.geolocation.watchPosition(function(position){
//     console.log("posicion: "+ position.coords.latitude);
// });
// console.log("watchID"+watchID);
//
// navigator.geolocation.clearWatch(watchID);