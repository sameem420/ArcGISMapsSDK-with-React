import { useState } from "react";
import "./App.css";
import ArcGISGraphic from "./components/ArcGISGraphic";
import ArcGISGraphicsLayer from "./components/ArcGISGraphicsLayer";
import ArcGISMapView from "./components/ArcGISMapView";
import ArcGISSceneView from "./components/ArcGISSceneView";
// import ArcGISWebMap from "./components/ArcGISWebMap";
// import ArcGISWebScene from "./components/ArcGISWebScene";
// import Color from "@arcgis/core/Color";
// import Point from "@arcgis/core/geometry/Point";
// import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";
// import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";

const point = {
  type: "point", // autocasts as new Point()
  longitude: -49.97,
  latitude: 41.73,
};

const markerSymbol = {
  type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
  color: [226, 119, 40],
  outline: {
    // autocasts as new SimpleLineSymbol()
    color: [255, 255, 255],
    width: 2,
  },
};

const polyline = {
  type: "polyline", // autocasts as new Polyline()
  paths: [
    [-111.3, 52.68],
    [-98, 49.5],
    [-93.94, 29.89],
  ],
};

// Create a symbol for drawing the line
const lineSymbol = {
  type: "simple-line", // autocasts as SimpleLineSymbol()
  color: [226, 119, 40],
  width: 4,
};

const polygon = {
  type: "polygon", // autocasts as new Polygon()
  rings: [
    [-64.78, 32.3],
    [-66.07, 18.45],
    [-80.21, 25.78],
    [-64.78, 32.3],
  ],
};

// Create a symbol for rendering the graphic
const fillSymbol = {
  type: "simple-fill", // autocasts as new SimpleFillSymbol()
  color: [227, 139, 79, 0.8],
  outline: {
    // autocasts as new SimpleLineSymbol()
    color: [255, 255, 255],
    width: 1,
  },
};

function App() {
  const [mapView, setMapView] = useState(true);
  const [sceneView, setSceneView] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setMapView(true);
          setSceneView(false);
        }}
        className=""
        style={{
          backgroundColor: "#242424",
          color: "white",
          position: "absolute",
          zIndex: 1,
          top: "200px",
          left: "15px",
          width: "32px",
          height: "32px",
          border: 0,
        }}
      >
        2D
      </button>
      <button
        onClick={() => {
          setMapView(false);
          setSceneView(true);
        }}
        className=""
        style={{
          backgroundColor: "#242424",
          color: "white",
          position: "absolute",
          zIndex: 1,
          top: "235px",
          left: "15px",
          width: "32px",
          height: "32px",
          border: 0,
        }}
      >
        3D
      </button>
      {mapView ? (
        <ArcGISMapView>
          <ArcGISGraphicsLayer>
            <ArcGISGraphic geometry={point} symbol={markerSymbol} />
            <ArcGISGraphic geometry={polyline} symbol={lineSymbol} />
            <ArcGISGraphic geometry={polygon} symbol={fillSymbol} />
          </ArcGISGraphicsLayer>
        </ArcGISMapView>
      ) : (
        <ArcGISSceneView />
      )}
      {/* <ArcGISWebMap /> */}
      {/* <ArcGISWebScene /> */}
    </>
  );
}

export default App;

// <button
//         onClick={() => {
//           setSceneView(false);
//           setMapView(true);
//         }}
//         className="esri-button"
//         style={{
//           backgroundColor: "#242424",
//           color: "white",
//           zIndex: 1,
//           position: "absolute",
//           border: 0,
//           top: "200px",
//           left: "15px",
//           width: "32px",
//           height: "32px",
//         }}
//       >
//         2D
//       </button>
//       <button
//         onClick={() => {
//           setSceneView(true);
//           setMapView(false);
//         }}
//         className="esri-button"
//         style={{
//           backgroundColor: "#242424",
//           color: "white",
//           zIndex: 1,
//           position: "absolute",
//           border: 0,
//           top: "235px",
//           left: "15px",
//           width: "32px",
//           height: "32px",
//         }}
//       >
//         3D
//       </button>
//       {mapView == true ? (
//         <ArcGISMapView>
//           <ArcGISGraphicsLayer>
//             <ArcGISGraphic geometry={point} symbol={markerSymbol} />
//             <ArcGISGraphic geometry={polyline} symbol={lineSymbol} />
//             <ArcGISGraphic geometry={polygon} symbol={fillSymbol} />
//           </ArcGISGraphicsLayer>
//         </ArcGISMapView>
//       ) : (
//         <ArcGISSceneView />
//       )}
