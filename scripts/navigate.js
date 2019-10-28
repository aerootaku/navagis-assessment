var geocoder = new google.maps.Geocoder();

var geoAddress = [];

googleMapService = {
	initNavigateMap: function (mapID, panelDirectionID, startLatitude, startLongitude, endLatitude, endLongitude) {
		var directionsDisplay = new google.maps.DirectionsRenderer;
		var directionsService = new google.maps.DirectionsService;
		
		//initialize the map
		var map = new google.maps.Map(document.getElementById(mapID), {
		  zoom: 7,
		  center: {lat: startLatitude, lng: startLongitude}
		}); 
		
		$("#" + panelDirectionID).html("");
		directionsDisplay.setMap(map);
		directionsDisplay.setPanel(document.getElementById(panelDirectionID));

		start = startLatitude + ", " + startLongitude;
		end = endLatitude + ", " + endLongitude;
		googleMapService.calculateAndDisplayRoute(directionsService, directionsDisplay, start, end);
	},

	calculateAndDisplayRoute: function (directionsService, directionsDisplay, start, end) {
		directionsService.route({
		  origin: start,
		  destination: end,
		  travelMode: 'DRIVING'
		}, function(response, status) {
		  if (status === 'OK') {
			directionsDisplay.setDirections(response);
		  } else {
			alert('Directions request failed due to ' + status);
		  }
		});
	},

	
	getGeolocationData: function(current_lat, current_long, destination_lat, destination_long){

		geoAddress = [];

			var geoData = {
					latitude: current_lat,
					longitude: current_long
				}
			
			geoAddress.push(geoData);

			var geoDestination = {
					latitude: destination_lat,
					longitude: destination_long
			}
			geoAddress.push(geoDestination);

			googleMapService.initNavigateMap("map2", "panel-direction", geoAddress[0].latitude, geoAddress[0].longitude, geoAddress[1].latitude, geoAddress[1].longitude);
			
	}
	
}
