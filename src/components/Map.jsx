import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = ({ position, name }) => {
    // Center map on Sri Lanka initially or the cyclone
    const center = [7.8731, 80.7718]; // Sri Lanka center

    return (
        <div className="h-[400px] w-full rounded-xl overflow-hidden shadow-lg border border-slate-700 z-0 relative">
            <MapContainer center={center} zoom={6} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {position && (
                    <>
                        <Marker position={position}>
                            <Popup>
                                {name} <br /> Current Location
                            </Popup>
                        </Marker>
                        <Circle
                            center={position}
                            pathOptions={{ fillColor: 'red', color: 'red' }}
                            radius={50000}
                        />
                    </>
                )}
            </MapContainer>
        </div>
    );
};

export default MapComponent;
