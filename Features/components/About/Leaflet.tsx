"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Leaflet = () => {
  return (
    <>
      <MapContainer
        className="w-full h-full rounded-lg"
        center={[35.76095027461322, 51.26377948685139]}
        zoom={14}
        scrollWheelZoom={true}
        zoomControl={true}
        attributionControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[35.76095027461322, 51.26377948685139]}>
          <Popup className="custom-popup">
            <div className="popup-content">
              <h3>آدرس هتل موجان</h3>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Leaflet;
