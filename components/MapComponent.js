import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';

// URLs for icons
const greenIconUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Map_pin_icon_green.svg/752px-Map_pin_icon_green.svg.png';
const redIconUrl = 'https://www.freeiconspng.com/uploads/red-location-map-pin-icon-5.png';
const blackIconUrl = 'https://cdn-icons-png.flaticon.com/512/484/484167.png';
const yellowIconUrl = 'https://cdn-icons-png.flaticon.com/512/7107/7107955.png';

const createMarker = (lat, lng, name, phone, sev, description) => {
  return { lat, lng, name, phone, sev, description };
};

const MapComponent = () => {
  const [L, setL] = useState(null);
  const [customIcons, setCustomIcons] = useState({});
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    // Ensure window is available
    if (typeof window !== 'undefined') {
      import('leaflet').then((module) => {
        const leaflet = module.default;
        setL(leaflet);

        // Initialize icons
        const icons = {
          4: leaflet.icon({ iconUrl: blackIconUrl, iconSize: [25, 25], iconAnchor: [12, 41], popupAnchor: [1, -34] }),
          3: leaflet.icon({ iconUrl: redIconUrl, iconSize: [25, 25], iconAnchor: [12, 41], popupAnchor: [1, -34] }),
          2: leaflet.icon({ iconUrl: yellowIconUrl, iconSize: [25, 25], iconAnchor: [12, 41], popupAnchor: [1, -34] }),
          1: leaflet.icon({ iconUrl: greenIconUrl, iconSize: [25, 25], iconAnchor: [12, 41], popupAnchor: [1, -34] }),
        };
        setCustomIcons(icons);
      });
    }
  }, []);

  function AddMarker() {
    useMapEvents({
      click(e) {
        const lat = e.latlng.lat;
        const lng = e.latlng.lng;
        const name = prompt('Please enter your name:');
        const phone = prompt('Please input your phone number:');
        const sev = prompt('How severe is this emergency? (1-3):');
        const description = prompt('Please give a brief description of your emergency:');

        if (name && phone && sev && description) {
          const newMarker = createMarker(lat, lng, name, phone, parseInt(sev), description);
          setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
        }
      },
    });
    return null;
  }

  if (!L || !customIcons[1]) return null;
  const { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } = require('react-leaflet');
  return (
    <MapContainer center={[43.461249, -80.517577]} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <AddMarker />
      {markers.map((marker, index) => (
        <Marker key={index} position={[marker.lat, marker.lng]} icon={customIcons[marker.sev]}>
          <Popup>
            <strong>{marker.name}</strong><br />
            {marker.phone}<br />
            {marker.description}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
