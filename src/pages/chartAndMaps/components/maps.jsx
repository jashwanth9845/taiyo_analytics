import React from "react";
import styles from "../css/maps.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Loading from "../../loading/components/Loading";

const Maps = ({ data: countryData, isLoading, isSuccess, errorMessage }) => {
  if (isLoading) {
    return <Loading />;
  }
  if (errorMessage) {
    return (
      <div style={{ position: "relative" }}>
        <div className="notFound extrnal">
          <p>{errorMessage}</p>
        </div>
      </div>
    );
  }
  if (isSuccess) {
    return (
      <div className={styles.container}>
        <h3>Cases overview by map</h3>
        <div>
          <MapContainer
            center={[20, 0]}
            zoom={1}
            className={styles.mapContainer}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {countryData.map((country) => (
              <Marker
                key={country.country}
                position={[country.countryInfo.lat, country.countryInfo.long]}
              >
                <Popup>
                  <div>
                    <h4>{country.country}</h4>
                    <p>Total Cases: {country.cases}</p>
                    <p>Recovered: {country.recovered}</p>
                    <p>Deaths: {country.deaths}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    );
  }
};

export default Maps;
