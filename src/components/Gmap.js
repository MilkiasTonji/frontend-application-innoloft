import React from 'react'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


const Gmap = ({lat, long, country, city}) => {

      return (
        <MapContainer 
          center={[lat, long]}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
          scrollWheelZoom={false}

        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>OpenStreetMap</a> contributors"
          />
          <Marker position={[lat, long]}>
            <Popup>
              A marker indicating a location in {country}, {city}.
            </Popup>
          </Marker>
        </MapContainer>
      );
}

export default Gmap;