import "./App.css";
import { useEffect, useRef } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

function App() {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = new Map({
      basemap: "osm",
    });

    const mapView = new MapView({
      map: map,
      container: mapRef.current,
      zoom: 13,
      center: [55, 25],
    });
  }, []);

  return (
    <>
      <div ref={mapRef} className="mapDiv"></div>
    </>
  );
}

export default App;
