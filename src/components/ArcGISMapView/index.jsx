import { useEffect, useRef, useState } from "react";
import "./styles.css";
import { createMapView } from "../../utils/createMapView";
import { mapContext } from "../../contexts";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";

const ArcGISMapView = ({ children }) => {
  const [view, setView] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const mapView = createMapView(mapRef.current);

    let basemapGallery = new BasemapGallery({
      view: mapView,
    });

    let basemapToggle = new BasemapToggle({
      view: mapView,
      nextBasemap: "hybrid",
    });

    mapView.ui.add(basemapToggle, {
      position: "bottom-left",
    });

    mapView.ui.add(basemapGallery, {
      position: "top-right",
    });

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
