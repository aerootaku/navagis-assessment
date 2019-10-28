"use strict";

let current_lat = 0;
let current_long = 0;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  current_lat = position.coords.latitude;
  current_long = position.coords.longitude;

}


function calculateDistance(lat1, lon1, lat2, lon2, unit) {
      let radlat1 = Math.PI * lat1/180;
      let radlat2 = Math.PI * lat2/180;
      let theta = lon1-lon2;
      let radtheta = Math.PI * theta/180;
      let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);

      dist = Math.acos(dist);
      dist = dist * 180/Math.PI;
      dist = dist * 60 * 1.1515;

      if (unit=="K") { 
        dist = dist * 1.609344; 
      }
      if (unit=="N") {
         dist = dist * 0.8684; 
      }


      return dist;
  }


let markerPositions = [

      // restobar
      {lat: 10.3325108, lng: 123.9121496},
      {lat: 10.3355878, lng: 123.8968021},
      {lat: 10.321283,  lng: 123.929628},
      {lat: 10.3172473, lng: 123.8949344},
      {lat: 10.3266499, lng: 123.9174839},

       // korean
      {lat: 10.3402006, lng: 123.9112271},
      {lat: 10.319074, lng: 123.9007774},  
      {lat: 10.319166, lng: 123.905643},

       // filipino
      {lat: 10.312044, lng: 123.918810},
      {lat: 10.31833, lng: 123.906126},
      {lat: 10.3189287, lng: 123.9056972},
      {lat:  10.3121931, lng: 123.8949392},
     
      //pizza
      {lat: 10.310882, lng: 123.895377},
      {lat: 10.3237839, lng: 123.9090509},
      {lat: 10.3303999, lng: 123.9057745},
      
      //coffee
      {lat: 10.3524436, lng: 123.8882228},
      {lat: 10.3219626, lng: 123.9046623},
      {lat: 10.309087, lng: 123.895142}
 
];


function setContents(countRestaurant){

    let contents = '<div id="content">'+    
      '<div id="siteNotice">'+    
      '</div>'+    
      '<span style="font-size:medium; color: black; font-weight:bold;">Total Restaurant: '+countRestaurant+'</span>'+    
    '</div>';   

    return contents;
}

$(window).load(function (){


getLocation();

  let places= {
    
    restobar:{
      label:'Restobar',
      checked: true,
      icon: 'http://maps.gstatic.com/mapfiles/markers2/marker.png',
      items: [
              ['Lithuanian Place', 10.3325108, 123.9121496, 130, "13 Golden Sun Drive, Banilad Rd, Cebu City, 6000, Philippines", 4.8],
              ['Anzani', 10.3355878, 123.8968021, 110, "Bellini Champagne Lounge and Live music Bar, Panorama Heights., Nivel Hills, Lahug, Cebu City, 6000 Cebu, Philippines", 4.2],
              ['MO2 Restobar Cebu', 10.321283, 123.929628, 90, "6014 Cebu N Rd, Tipolo, Mandaue City, 6014 Cebu, Philippines", 3.9],
              ['Ola Resto Bar', 10.3172473, 123.8949344, 320, "The Maxwell Hotel, GF, N Escario St, Cebu City, 6000 Cebu, Philippines", 4],
              ["Rock'n roll & blues MAC restobar", 10.3266499, 123.9174839, 190, "E-Zone, F. Cabahug St, Cebu City, 6000 Cebu, Philippines", 4.1]
             ]
    },
   
    korean:{
      label:'Korean Restaurant',

      icon: 'http://maps.gstatic.com/mapfiles/markers2/icon_green.png',
      items: [
              ['Pearl Korean Meat Shop & Restaurant', 10.3402006, 123.9112271, 220, "Gaisano Country Mall, Gov. M. Cuenco Ave, Apas, Cebu City, 6000 Cebu, Philippines", 4],
              ['The BADA Korean Restaurant', 10.319074, 123.9007774, 223, "9-3 N Escario St, Cebu City, Cebu, Philippines", 4.3],
              ['K-Pub BBQ', 10.319166, 123.905643,113, "Biliran Rd, Cebu City, Cebu, Philippines", 3.7]
             ]    
    },
    
    filipino:{
      label:'Filipino Restaurant',
      icon: 'http://maps.gstatic.com/mapfiles/markers2/icon_green.png',
      items:  [
                ['KKD stk+bbq', 10.312044, 123.918810,130, "M. J. Cuenco Ave, Cebu City, Cebu, Philippines", 4.3],
                ['Hukad', 10.31833, 123.906126, 102, "Ayala Center Cebu, Biliran Rd, Cebu City, Cebu, Philippines", 3.9], 
                ['Laguna Garden Café', 10.3189287, 123.9056972, 70, "The Terraces, Ayala Center Cebu, Archbishop Reyes Ave, Cebu City, 6000 Cebu, Philippines", 4.2,],
                ['Boosog Lasang Pinoy', 10.3121931, 123.8949392, 103, "Juana Osmeña St, Cebu City, 6000 Cebu, Philippines", 4.0]
              ]
    },

     pizza:{
      label:'Pizza Parlour',
      icon: 'http://maps.gstatic.com/mapfiles/markers2/icon_green.png',
      items: [
              ['Handuraw Pizza', 10.310882, 123.895377, 100, "Mango Square Mall, G/F, Juana Osmeña St, Cebu City, 6000 Cebu, Philippines", 4.3],
              ['La Bella Pizza Bistro', 10.3237839, 123.9090509, 120, "The Gallery, Juan Luna Avenue, Cebu City, 6000 Cebu, Philippines", 3.9],
              ['Yellow Cab Pizza Co.', 10.3303999, 123.9057745, 100, "W Geonzon St, Apas, Cebu City, 6000 Cebu, Philippines", 4.1],
             ] 
        },
    cafe:{
      label:'Coffee',
      icon: 'http://maps.gstatic.com/mapfiles/markers2/boost-marker-mapview.png',
      items: [
              ['Crate Cafe', 10.3524436, 123.8882228, 109, "Cebu Transcentral Hwy, Cebu City, Cebu, Philippines", 4.1],
              ['32 Umber Café & Co', 10.3219626, 123.9046623, 50, "The Forum, 6000 Archbishop Reyes Ave, Cebu City, Cebu, Philippines", ],
              ['Bos Coffee', 10.309087, 123.895142, 40, "Le Gab Cafe, 528 F. Ramos Street, Cebu City, 6000 Cebu, Philippines", 4.2]
             ]    
    }              
  },
  
  map = new google.maps.Map(
              document.getElementById('map'), 
              {
                zoom: 13,
                center: new google.maps.LatLng(10.3145975, 123.9018502),
              }
            ),
  infowindow = new google.maps.InfoWindow(),
  
  ctrl=$('<div/>').css({background:'#fff',
                        // margin-top: '5px',
                        border:'1px solid #000',
                        padding: '25px',
                        margin:'80px 0 0 0',
                        left: '7px',
                        width: '20%',
                        top: '50px',
                        'font-size':'medium',
                        textAlign:'center'
                       });
 
   let drawingManager = new google.maps.drawing.DrawingManager({
          drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: ['circle', 'rectangle']
          },
          circleOptions: {
            fillColor: '#0c5460',
            fillOpacity: 0.35,
            strokeWeight: 0,
            clickable: true,
            editable: true,
            zIndex: 1
          }
        });
        drawingManager.setMap(map);


 google.maps.event.addListener(drawingManager, 'circlecomplete', function(circle) {
          let radius = circle.getRadius();
          
            let count = 0;
            for (let i=0; i<markerPositions.length; i++) {
                let distance = calculateDistance(
                        markerPositions[i].lat,
                        markerPositions[i].lng,
                        circle.getCenter().lat(),
                        circle.getCenter().lng(),
                        "K");

                let radConvertToKM = radius;
                if (distance * 1000 < radConvertToKM) { 
                
                    count++;
                }
              

            }

            let contents = setContents(count);

            let infowindow = new google.maps.InfoWindow({    
              content: contents    
            });

          infowindow.setPosition(circle.getCenter());
          infowindow.open(map);

        });
 


google.maps.event.addListener(drawingManager, 'rectanglecomplete', function(rectangle) {

  infowindow.setPosition(rectangle.getBounds().getNorthEast());
  infowindow.open(map);
});


  ctrl.append($('<input>',{type:'button',value:'Check All',class:'btn btn-primary'})
                .click(function(){
                  $(this).parent().find('input[type="checkbox"]')
                    .prop('checked',true).trigger('change');
                }));
  ctrl.append($('<br/>'));
   ctrl.append($('<br/>'));
  
  ctrl.append($('<input>',{type:'button',value:'Clear', class:'btn btn-danger'})
                .click(function(){
                  $(this).parent().find('input[type="checkbox"]')
                    .prop('checked',false).trigger('change');
                }));
  ctrl.append($('<hr/>'));
  
  $.each(places,function(c,category){
    
    let cat=$('<input>',{type:'checkbox'}).change(function(){
       $(this).data('goo').set('map',(this.checked)?map:null);
    })
      
      .data('goo',new google.maps.MVCObject)
      .prop('checked',!!category.checked)
   
      .trigger('change')
    
      .appendTo($('<div/>').css({whiteSpace:'nowrap',textAlign:'left'}).appendTo(ctrl))
      .after(category.label);
      
      $.each(category.items,function(m,item){
         let marker=new google.maps.Marker({
                position:new google.maps.LatLng(item[1],item[2]),
                title:item[0],
                icon:category.icon
              });
         
         //bind the map-property of the marker to the map-property
         //of the MVCObject that has been stored as checkbox-data 
         marker.bindTo('map',cat.data('goo'),'map');
         google.maps.event.addListener(marker,'click',function(){
          let content = '<div id="iw-container">' +
          '<div class="iw-title">'+ item[0] + '</div>' +
          '<div class="iw-content">' +
            '<div class="iw-subTitle">Address</div>' +
            '<p>' + item[4] + '</p>' +
            '<div class="iw-subTitle">User Visited: ' + '<p>' + item[3] +  ' Visits' +  '<br>User Rating: ' + item[5] + '</p>'+'</div>' +
           
          '</div>' +
          '<div class="iw-bottom-gradient"></div>' +
        '</div>';

            // A new Info Window is created and set content
            var infowindow = new google.maps.InfoWindow({
            content: content,

            // Assign a maximum value for the width of the infowindow allows
            // greater control over the various content elements
            maxWidth: 350
            });
            infowindow.open(map,this);
           
            googleMapService.getGeolocationData(current_lat,current_long, item[1], item[2]);
         });

      });

  });
 
 //use the buttons-div as map-control 
 map.controls[google.maps.ControlPosition.TOP_RIGHT].push(ctrl[0]);
}
);

