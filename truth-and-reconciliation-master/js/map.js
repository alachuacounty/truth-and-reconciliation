 // Initialize and add the map
 function initMap() {
        
    /*



    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    var sydney = {lat:-33.8688, lng:151.2093};

    // The map, centered at Uluru
    var map = new google.maps.Map(
    document.getElementById('map'), {zoom: 4, center: uluru});
    
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});

    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    var marker2 = new google.maps.Marker({position: sydney, map: map, title:"This is Sydney",
    icon: iconBase + 'parking_lot_maps.png'});
    
    */


    /****************************************** */
           /* Newnansville Markers Defined*/
    /****************************************** */            
    var newnansville = {lat:29.8050, lng:-82.4798};
    var newnansville2 = {lat:29.8051, lng:-82.4800};
    var newnansville3 = {lat:29.8052, lng:-82.4802};
    var newnansville4 = {lat:29.8055, lng:-82.4806};
    
    
   /****************************************** */
          /* Micanopy Markers Defined*/
   /****************************************** */             
   var micanopy = {lat:29.5047, lng:-82.2798};
  

   /****************************************** */
          /* Waldo Markers Defined*/
   /****************************************** */             
   var waldo = {lat:29.7897, lng:-82.1673};
  
    /****************************************** */
          /* Rochelle Markers Defined*/
   /****************************************** */             
   var rochelle = {lat:29.5964, lng:-82.2178};
  

     /****************************************** */
          /* Archer Markers Defined*/
   /****************************************** */             
   var archer = {lat:29.5300, lng:-82.5190};
  

     /****************************************** */
          /* Newberry Markers Defined*/
   /****************************************** */             
   var newberry = {lat:29.6464, lng:-82.6065};
  
      /****************************************** */
          /* High Springs Markers Defined*/
   /****************************************** */             
   var highsprings = {lat:29.8269, lng:-82.5968};
  
    /****************************************** */
          /* Campville Markers Defined*/
   /****************************************** */             
   var campville = {lat:29.6664, lng:-82.1184};
  

     /****************************************** */
          /* Gainesville Markers Defined*/
   /****************************************** */             
   var gainesville = {lat:29.6516, lng:-82.3248};
  
   
   
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 11, center: gainesville});

    var iconBase = '../img/';
       /* var marker2 = new google.maps.Marker({position: sydney, map: map, title:"This is Sydney",
        icon: iconBase + 'truth-map-marker.png'});*/

    var marker1 = new google.maps.Marker({position: newnansville, map: map,icon:'img/map-100px_03.png'});
    var marker2 = new google.maps.Marker({position: newnansville2, map: map,icon:'img/map-100px_03.png'});
    var marker3 = new google.maps.Marker({position: newnansville3, map: map,icon:'img/map-100px_03.png'});
    var marker4 = new google.maps.Marker({position: newnansville4, map: map,icon:'img/map-100px_03.png'});

    var marker5 = new google.maps.Marker({position: micanopy, map: map,icon:'img/map-100px_03.png'});

    var marker6 = new google.maps.Marker({position: waldo, map: map,icon:'img/map-100px_03.png'});

    var marker7 = new google.maps.Marker({position: rochelle, map: map,icon:'img/map-100px_03.png'});

    var marker8 = new google.maps.Marker({position: archer, map: map,icon: 'img/map-100px_03.png'});

    var marker9 = new google.maps.Marker({position: newberry, map: map,icon:'img/map-100px_03.png'});

    var marker10 = new google.maps.Marker({position: highsprings, map:map,icon:'img/map-100px_03.png'});


    var marker11 = new google.maps.Marker({position: campville, map: map,icon:'img/map-100px_03.png'});

    var marker12 = new google.maps.Marker({position: gainesville, map: map,icon:'img/map-100px_03.png'});




        var infowindow1 = new google.maps.InfoWindow({
            content: contentString2
          });

        marker1.addListener('click', function() {
            infowindow1.open(map, marker1);
          });
          



          var infowindow2 = new google.maps.InfoWindow({
              content: contentString2
            });
  
          marker2.addListener('click', function() {
              infowindow2.open(map, marker2);
            });



            var infowindow3 = new google.maps.InfoWindow({
              content: contentString2
            });
  
          marker3.addListener('click', function() {
              infowindow3.open(map, marker3);
            });


       
            var infowindow4 = new google.maps.InfoWindow({
              content: contentString2
            });
  
          marker4.addListener('click', function() {
              infowindow4.open(map, marker4);
            });


            
            var infowindow5 = new google.maps.InfoWindow({
              content: contentString2
            });
  
          marker5.addListener('click', function() {
              infowindow5.open(map, marker5);
         });
              
            var infowindow6 = new google.maps.InfoWindow({
              content: contentString2
            });
  
          marker6.addListener('click', function() {
              infowindow6.open(map, marker6);
            });



            var infowindow7 = new google.maps.InfoWindow({
              content: contentString2
            });
  
          marker7.addListener('click', function() {
              infowindow7.open(map, marker7);
            });
         


            var infowindow8 = new google.maps.InfoWindow({
              content: contentString2
            });
  
          marker8.addListener('click', function() {
              infowindow8.open(map, marker8);
            });


            
            var infowindow9 = new google.maps.InfoWindow({
              content: contentString2
            });
  
          marker9.addListener('click', function() {
              infowindow9.open(map, marker9);
            });


            var infowindow10 = new google.maps.InfoWindow({
              content: contentString2
            });
  
          marker10.addListener('click', function() {
              infowindow10.open(map, marker10);
            });


            
            var infowindow11 = new google.maps.InfoWindow({
              content: contentString2
            });
  
          marker11.addListener('click', function() {
              infowindow11.open(map, marker11);
            });
         
    
            var infowindow12 = new google.maps.InfoWindow({
              content: contentString2
            });
  
          marker12.addListener('click', function() {
              infowindow12.open(map, marker12);
            });
}

















var contentString2 = '<div class="marker-info"><div class="marker-text"><h2> Location Title </h2>Location description : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div><div class="marker-image"><a href="details.html"> <img src="img/Intersection 23.png"/></a></div></div>';

