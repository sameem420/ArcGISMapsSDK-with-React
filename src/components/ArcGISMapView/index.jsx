import { useEffect, useRef, useState } from "react";
import "./styles.css";
import { createMapView } from "../../utils/createMapView";
import { mapContext } from "../../contexts";

const ArcGISMapView = ({ children }) => {
  const [view, setView] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const mapView = createMapView(mapRef.current);
    setView(mapView);
    return () => mapView && mapView.destroy();
  }, []);

  return (
    <>
      <div ref={mapRef} className="mapViewDiv">
        <mapContext.Provider value={{ view }}>{children}</mapContext.Provider>
      </div>
    </>
  );
};

export default ArcGISMapView;
