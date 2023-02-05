/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
let map;

function initMap() {
    console.log("initmap running");
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 38.89659, lng: -77.031471 },
        zoom: 2,
    });

    infoWindow = new google.maps.InfoWindow({
        content: ""
    });

    // Get the LEED hotel data
    const LEED_parsing_script = document.createElement("LEED_parsing_script");
    LEED_parsing_script.setAttribute(
        "src",
        `var request = new XMLHttpRequest();
        request.open("GET", "/src/Maps/(Filtered for Tourism) LEEDProjects.json", false);
        request.send(null)
        var my_JSON_object = JSON.parse(request.responseText);`
        //eqfeed_callback(my_JSON_object.result[0]);` // credit: https://stackoverflow.com/a/16991355
    );

    // get Capital Bikeshare data
    const bike_parsing_script = document.createElement("bike_parsing_script");
    bike_parsing_script.setAttribute(
        "src",
        "fetch('/src/Maps/bike_json_data.json').then((response) => response.json()).then((json) => console.log('fdsjKFJDSKFLJSDLF'));"
    );

    document.getElementsByTagName("head")[0].appendChild(bike_parsing_script);
}

// Defines the callback function to parse capitalbikeshare json.
function bike_callback(results) {

    console.log("bike calling back");
    console.log(results);
    for (let i = 0; i < results.data.supply.stations.length; i++) {
        const coords = results.data.supply.stations[i].location;

        const image = {
            url: "https://github.com/user-365/UGAHacks8/blob/maps/src/Maps/bike%20map%20marker%20icon.png", // hardcoded lol
            // This marker is 25 pixels wide by 38 pixels high.
            size: new google.maps.Size(25, 38),
            // The origin for this image is (0, 0).
            origin: new google.maps.Point(0, 0),
            // The anchor for this image is the arrow at (0, 19).
            anchor: new google.maps.Point(0, 19),
        };

        const latLng = new google.maps.LatLng(coords[0], coords[1]);
        const marker = new google.maps.Marker({
            position: latLng,
            map: map,
            icon: image
        });

        const f = results.data.supply.stations[i];

        marker.addListener("click", (e) => {

            const contentString =
                '<div class="info-window-content">' +
                '<h2>Station @' + f.stationName + '</h2>' +
                '<h3>Bikes Available:</h3><p>' + f.bikesAvailable + 'of' + f.bikeDocksAvailable + '</p>' +
                '<h3>Is Station Online? :</h3><p>' + (!f.isOffline ? "Yes, it's online!" : "Sorry; temporarily offline.") + '</p>' +
                '<a href="https://account.capitalbikeshare.com/map" target="new">Find more bike stations</a>' +
                '</div>';

            infoWindow.setContent(contentString);
            infoWindow.open({
                anchor: marker,
                map,
                shouldFocus: false,
            });
        });
    }
}

window.initMap = initMap;
window.bike_callback = bike_callback;