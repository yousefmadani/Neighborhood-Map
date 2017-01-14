var map, i, marker, myinfowindow, ViewModel;
var CLIENT_ID = 'ONOTLR5VFDN3OWMBQBKYHEYNUKYAH4MOXN3USUNSIBQANACE';
var CLIENT_SECRET = 'EXWK04HWAKTBIJZLFGYOM3RWL2VQMXD4XBOPZEYKWLPEPZOL';

var locations = [{
        title: 'Caffe Nero',
        location: {
            lat: 51.277588,
            lng: 1.082901
        },
        VENUE_ID: '4ee32a5299119449ffd02cae'
    },
    {
        title: 'Starbucks',
        location: {
            lat: 51.278085,
            lng: 1.081973
        },
        VENUE_ID: '4c05484458dad13a97704897'
    },
    {
        title: 'Cafe Turquoise',
        location: {
            lat: 51.278627,
            lng: 1.081455
        },
        VENUE_ID: '527f9abb498e8d1d626f7f84'
    },
    {
        title: 'Burgate Coffee House',
        location: {
            lat: 51.279024,
            lng: 1.081649
        },
        VENUE_ID: '52a5c5ae11d293427cfbe5fa'
    },
    {
        title: 'Pret A Manger',
        location: {
            lat: 51.278771,
            lng: 1.080600
        },
        VENUE_ID: '4b9faacbf964a520213337e3'
    },
    {
        title: 'Cafe St Pierre',
        location: {
            lat: 51.280906,
            lng: 1.076769
        },
        VENUE_ID: '4bbeff6af353d13ae2e87d10'
    },
    {
        title: 'Costa Coffee',
        location: {
            lat: 51.279324,
            lng: 1.079699
        },
        VENUE_ID: '4cd29abe1a096a318895c7a7'
    },
    {
        title: 'Patisserie Valerie',
        location: {
            lat: 51.279915,
            lng: 1.078733
        },
        VENUE_ID: '4bdc8b30afe8c9b61fec4f85'
    }
];

var styles = [{
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [{
        "color": "#444444"
    }]
}, {
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [{
        "color": "#fffaf4"
    }, {
        "saturation": "0"
    }]
}, {
    "featureType": "landscape.man_made",
    "elementType": "all",
    "stylers": [{
        "visibility": "on"
    }, {
        "hue": "#ff8b00"
    }]
}, {
    "featureType": "landscape.natural",
    "elementType": "all",
    "stylers": [{
        "visibility": "off"
    }, {
        "color": "#ff0000"
    }]
}, {
    "featureType": "landscape.natural.landcover",
    "elementType": "all",
    "stylers": [{
        "color": "#ff0000"
    }]
}, {
    "featureType": "poi",
    "elementType": "all",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "poi.park",
    "elementType": "all",
    "stylers": [{
        "visibility": "on"
    }]
}, {
    "featureType": "road",
    "elementType": "all",
    "stylers": [{
        "saturation": -100
    }, {
        "lightness": 45
    }]
}, {
    "featureType": "road.highway",
    "elementType": "all",
    "stylers": [{
        "visibility": "simplified"
    }]
}, {
    "featureType": "road.arterial",
    "elementType": "labels.icon",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "transit",
    "elementType": "all",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "water",
    "elementType": "all",
    "stylers": [{
        "color": "#a0b8db"
    }, {
        "visibility": "on"
    }]
}]; //Styles from https://snazzymaps.com/style/42415/bema-cafe but "poi.business" has been removed


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 51.2785215,
            lng: 1.0790438
        },
        zoom: 16,
        styles: styles
    });

    myinfowindow = new google.maps.InfoWindow();


    //The ViewModel
    ViewModel = function() {
        var self = this;
        self.myOA = ko.observableArray();
        self.filter = ko.observable('');


        for (i = 0; i < locations.length; i++) {
            self.myOA.push(locations[i]);

            (function(marker, location) {
                marker = new google.maps.Marker({
                    map: map,
                    title: location.title,
                    position: location.location,
                    animation: google.maps.Animation.DROP,
                });
                // When a marker is clicked

marker.addListener('click', toggleBounce);
function toggleBounce() {
          marker.setAnimation(google.maps.Animation.BOUNCE);
          setTimeout(function(){
  marker.setAnimation(null);
}, 2323);
        }


                google.maps.event.addListener(marker, "click", function() {

                    $.ajax({
                        dataType: "jsonp",
                        url: 'https://api.foursquare.com/v2/venues/' +
                            location.VENUE_ID + '/photos' +
                            '?client_id=' + CLIENT_ID +
                            '&client_secret=' + CLIENT_SECRET +
                            '&v=20170101',

                        success: function(response) {
                            var results = response.response.photos.items;

                            myinfowindow.open(map, marker);


                            $(results).each(function(i, val) {
                                myinfowindow.setContent('<img src="' + val.prefix + '250' + val.suffix + '">');
                            });
                        },
                        error: function (noResponse){
                            alert ("Failed to load data from Fourquare, try again later ");
                        }
                    });
                });
                location.marker = marker;
            })(marker, locations[i]);
        }



        self.filteredLocations = ko.computed(function() {
            var filter = self.filter().toLowerCase();
             return ko.utils.arrayFilter(self.myOA(), function(place) {
                    if (place.title.toLowerCase().indexOf(filter) !== -1) {
                        place.marker.setVisible(true);
                        return true;
                    } else
                        place.marker.setVisible(false);
                });
        });
    };
    ko.applyBindings(new ViewModel());
}