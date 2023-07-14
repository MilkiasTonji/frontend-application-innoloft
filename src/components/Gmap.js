import React from 'react'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


const Gmap = ({lat, long, country}) => {

      return (
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          style={{ height: '400px', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>OpenStreetMap</a> contributors"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A marker indicating a location in London, UK.
            </Popup>
          </Marker>
        </MapContainer>
      );
}

export default Gmap;