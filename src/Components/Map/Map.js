import { MapContainer, TileLayer } from "react-leaflet";
import React from "react";
import { useState, useCallback, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import ReusableButton from "../../ReusableComponents/ReusableButton";
const zoom = 14;
function DisplayPosition({ map, center }) {
  const [position, setPosition] = useState(map.getCenter());
  // Get values from the store
  const coordsSelector = useSelector((state) => state.postal.coords);
  const showButton = useSelector((state) => state.postal.showButton);
  // Show location on the click
  const onClick = useCallback(() => {
    map.setView(coordsSelector, zoom);
  }, [map, coordsSelector]);

  const onMove = useCallback(() => {
    setPosition(map.getCenter());
  }, [map]);

  useEffect(() => {
    map.on("move", onMove);
    return () => {
      map.off("move", onMove);
    };
  }, [map, onMove]);

  return (
    <p>
      {showButton && (
        <ReusableButton onClick={onClick}>Show on map</ReusableButton>
      )}
    </p>
  );
}

function OSMap(props) {
  const [map, setMap] = useState(null);
  const coordsSelector = useSelector((state) => state.postal.coords);

  const displayMap = useMemo(
    () => (
      <MapContainer
        center={coordsSelector}
        zoom={zoom}
        scrollWheelZoom={false}
        whenCreated={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    ),
    []
  );

  return (
    <div>
      {map ? <DisplayPosition map={map} /> : null}
      {displayMap}
    </div>
  );
}

export default OSMap;
