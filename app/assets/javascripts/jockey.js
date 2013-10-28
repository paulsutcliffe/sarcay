handler = Gmaps.build('Google');
handler.buildMap({ provider: { center: new google.maps.LatLng(-34.397, 150.644), maxZoom: 15, scrollwheel: false}, internal: {id: 'map'}}, function(){
  markers = handler.addMarkers([
    {
      "lat": -12.098294,
      "lng": -76.976631,
      "picture": {
        "url": "/assets/marker-sarcay.png",
        "width":  66,
        "height": 66
      },
      "infowindow": "hello!"
    }
  ]);
  handler.bounds.extendWith(markers);
  handler.fitMapToBounds();
});
