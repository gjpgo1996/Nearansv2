function initMap() {
  var latitud,longitud, marcador;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: -9.082632, lng: -84.0431127}//Coordenadas de Peru
  });

  var miUbicacion = function(posicion) {
    latitud = posicion.coords.latitude;
    longitud = posicion.coords.longitude;

    marcador = new google.maps.Marker({
      position: {lat:latitud, lng:longitud},
      animation: google.maps.Animation.DROP,
      map: map
  });
    map.setZoom(17);
    map.setCenter({lat:latitud, lng:longitud});
  }
  var error = function (error) {
    window.alert("Tu navegador no soporta la API de geolocalizacion");
  }

  function buscar(e) {
    e.preventDefault();
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(miUbicacion,error);
    }
  }


  document.getElementById('openMap').addEventListener("click",buscar);


}
