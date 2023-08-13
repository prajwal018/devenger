import React, { useEffect } from 'react';
import {GoogleApiWrapper } from 'google-maps-react';

const MapWithMarker = (props) => {
  const { google } = props;

  useEffect(() => {
    const loadMap = async () => {
      const position = { lat: 18.5467, lng: 73.8334 };

      const mapOptions = {
        zoom: 12,
        center: position,
      };

      const map = new google.maps.Map(document.getElementById('map'), mapOptions);

      const marker = new google.maps.Marker({
        map: map,
        position: position,
        title: 'Pune',
      });

      google.maps.event.addListener(marker, 'click', () => {
        const infowindow = new google.maps.InfoWindow();

        const content = document.createElement('div');
        const nameElement = document.createElement('h2');
        nameElement.textContent = 'Pune';
        content.appendChild(nameElement);

        const placeAddressElement = document.createElement('p');
        placeAddressElement.textContent = 'Pune, Maharashtra, India';
        content.appendChild(placeAddressElement);

        infowindow.setContent(content);
        infowindow.open(map, marker);
      });
    };

    loadMap();
  }, [google]);

  return <div id="map" style={{ height: '100vh' }}></div>;
}
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY,
})(MapWithMarker);
