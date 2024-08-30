import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import { useRef, useEffect } from "react";
import "./styles.css";

const ArcGISWebMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const webMap = new WebMap({
      portalItem: {
        id: "e691172598f04ea8881cd2a4adaa45ba",
      },
    });

    const mapView = new MapView({
      map: webMap,
      container: mapRef.current,
    });

    return () => {
      mapView && mapView.destroy();
    };
  }, []);

  return (
    <>
      <div ref={mapRef} className="webMapDiv"></div>
    </>
  );
};

export default ArcGISWebMap;
