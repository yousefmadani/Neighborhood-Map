    var map, i, marker, myinfowindow;

    var locations = [{
            title: 'Caffe Nero',
            location: {
                lat: 51.277588,
                lng: 1.082901
            }
        },
        {
            title: 'Starbucks',
            location: {
                lat: 51.278085,
                lng: 1.081973
            }
        },
        {
            title: 'Cafe Turquoise',
            location: {
                lat: 51.278627,
                lng: 1.081455
            }
        },
        {
            title: 'Burgate Coffee House',
            location: {
                lat: 51.279024,
                lng: 1.081649
            }
        },
        {
            title: 'Pret A Manger',
            location: {
                lat: 51.278771,
                lng: 1.080600
            }
        },
        {
            title: 'Cafe St Pierre',
            location: {
                lat: 51.280906,
                lng: 1.076769
            }
        },
        {
            title: 'Costa Coffee',
            location: {
                lat: 51.279324,
                lng: 1.079699
            }
        },
        {
            title: 'Patisserie Valerie',
            location: {
                lat: 51.279915,
                lng: 1.078733
            }
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

        for (i = 0; i < locations.length; i++) {
            var cafeTitles = locations[i].title;
            var cafePositions = locations[i].location;
            //console.log(locations[i]); // check
            marker = new google.maps.Marker({
                map: map,
                title: cafeTitles,
                position: cafePositions,
            });
            (function(marker, cafeTitles) {

                // When a marker is clicked
                google.maps.event.addListener(marker, "click", function() {
                    myinfowindow.open(map, marker);
                    //console.log(cafeTitles); //check
                    myinfowindow.setContent(cafeTitles);
                    marker.setIcon({
                        url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
                    });
                });
            })(marker, cafeTitles);
        }

        //The ViewModel
        var ViewModel = function() {
            var self = this;
            self.myOA = ko.observableArray();

            // this is the second for-loop locations[i] that i make
            //Is there a way a can store locations[i] in a var then use it or something like that?
            for (i = 0; i < locations.length; i++) {
                self.myOA.push(locations[i]);
                //console.log(locations[i]);
            }
        };
        ko.applyBindings(new ViewModel());
    }