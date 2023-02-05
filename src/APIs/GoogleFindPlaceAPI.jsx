// credit: https://stackblitz.com/edit/react-http-get-request-examples-fetch?file=App%2FGetRequestErrorHandling.jsx

import React from 'react';

class GoogleFind extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            totalReactPackages: null,
            errorMessage: null
        };
    }

    componentDidMount() {
        // source: https://developers.google.com/maps/documentation/places/web-service/search-find-place#maps_http_places_findplacefromtext_locationbias-txt
        
        var axios = require('axios');

        var config = {
            method: 'get',
            url: 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?'
            + 'input=mongolian' // input term
            + '&inputtype=textquery'
                + '&locationbias=' + encodeURIComponent('circle:2000@47.6918452,-122.2226413') // lat,long
            + '&fields=' + encodeURIComponent(
                'formatted_address,name,rating,opening_hours,geometry,icon,icon_background_color'
            )
            + '&key=YOUR_API_KEY',
            headers: {}
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const { errorMessage } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">GET Request with Error Handling</h5>
                <div className="card-body">
                    Error message: {errorMessage}
                </div>
            </div>
        );
    }
}

export { GetRequestErrorHandling };