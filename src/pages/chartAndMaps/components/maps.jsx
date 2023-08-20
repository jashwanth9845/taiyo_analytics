import React from "react";
import styles from "../css/maps.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Loading from "../../loading/components/Loading";

/**
 * A React component for displaying cases overview on a map.
 *
 * @param {Object} props - Component props
 * @param {Object[]} props.data - Array of country data objects
 * @param {boolean} props.isLoading - Indicates if data is currently being loaded
 * @param {boolean} props.isSuccess - Indicates if data was successfully loaded
 * @param {string} props.errorMessage - Error message in case of loading failure
 * @returns {JSX.Element|null} - The rendered component JSX or null
 */
const Maps = ({ data: countryData, isLoading, isSuccess, errorMessage }) => {
  // Render loading spinner while data is being loaded
  if (isLoading) {
    return <Loading />;
  }

  // Render an error message if loading has failed
  if (errorMessage) {
    return (
      <div style={{ position: "relative" }}>
        <div className="notFound extrnal">
          <p>{errorMessage}</p>
        </div>
      </div>
    );
  }

  // If loading was successful, render the map
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

  // If no data to display, return null
  return null;
};

export default Maps;
