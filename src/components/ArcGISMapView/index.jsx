import { useEffect, useRef, useState } from "react";
import "./styles.css";
import { createMapView } from "../../utils/createMapView";
import { mapContext } from "../../contexts";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";

// import Graphic from "@arcgis/core/Graphic";
// import Color from "@arcgis/core/Color";
// import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";
// import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";

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

// mapView.on("click", (e) => {
//   const { longitude, latitude } = e.mapPoint;
//   const point = {
//     type: "point", // autocasts as new Point()
//     longitude: longitude,
//     latitude: latitude,
//   };

//   // var marker = new SimpleMarkerSymbol({ color: [203, 52, 52, 0.93] });
//   const markerSymbol = new SimpleMarkerSymbol({
//     angle: 0,
//     color: new Color([255, 255, 255, 0.25]),
//     outline: new SimpleLineSymbol({
//       cap: "round",
//       color: new Color([0, 122, 194, 1]),
//       join: "round",
//       miterLimit: 1,
//       style: "solid",
//       width: 1,
//     }),
//     path: "undefined",
//     size: 12,
//     style: "circle",
//     xoffset: 0,
//     yoffset: 0,
//   });

//   var graphic = new Graphic({
//     geometry: point,
//     Symbol: markerSymbol,
//   });
//   mapView.graphics.add(graphic);
// });
