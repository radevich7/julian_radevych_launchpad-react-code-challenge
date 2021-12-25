import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react/cjs/react.development";

const Map = () => {
  const [userCoords, setUserCoords] = useState([51.049999, -114.066666]);
  const [activeZip, setActiveZip] = useState(null);
  //   {"post code": "19901", "country": "United States", "country abbreviation": "US", "places": [{"place name": "Dover", "longitude": "-75.4955", "state": "Delaware", "state abbreviation": "DE", "latitude": "39.1564"}]}
  useEffect(() => {
    // if (navigator.geolocation) {
    //   navigator.geolocation.watchPosition(function (position) {
    //     setUserCoords([position.coords.latitude, position.coords.longitude]);
    //   });
    // }
    // navigator.geolocation.getCurrentPosition((position) => {
    //   if (position.coords.latitude && position.coords.longitude) {
    //     setUserCoords([position.coords.latitude, position.coords.longitude]);
    //   }
    //   console.log("running");
    // });
  }, []);
  // console.log(activeZip);
  return (
    <MapContainer center={userCoords} zoom={11} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        key={1}
        position={[51.049999, -114.066666]}
        // eventHandlers={{
        //   click: (e) => {
        //     setActiveZip([51.049999, -114.066666]);
        //   },
        // }}
        // onClick={() => {
        //
        //   console.log("running");
        // }}
      >
        <Popup
          position={[51.049999, -114.066666]}
          onClose={() => {
            setActiveZip(null);
          }}
        >
          <h2>data about the marker</h2>
          <p>description</p>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
