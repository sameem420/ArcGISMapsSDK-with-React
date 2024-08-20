import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import "./App.css";
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import ArcGISGraphic from "./components/ArcGISGraphic";
import ArcGISGraphicsLayer from "./components/ArcGISGraphicsLayer";
import ArcGISMapView from "./components/ArcGISMapView";
import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";
import Point from "@arcgis/core/geometry/Point";
import Polyline from "@arcgis/core/geometry/Polyline";
// import ArcGISSceneView from "./components/ArcGISSceneView";
// import ArcGISWebMap from "./components/ArcGISWebMap";
// import ArcGISWebScene from "./components/ArcGISWebScene";


const point = new Point({
  longitude: 55.2744,
  latitude: 25.1972,
});

const markerSymbol = new SimpleMarkerSymbol({
  color: [226, 119, 40],
  outline: {
    color: [255, 255, 255],
    width: 2,
  },
});

const polyline = new Polyline({
  paths: [
    [-111.3, 52.68],
    [-98, 49.5],
    [-93.94, 29.89],
  ],
});

const lineSymbol = new SimpleLineSymbol({
  // autocasts as SimpleLineSymbol()
  color: [226, 119, 40],
  width: 4,
});


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
const fillSymbol = new SimpleFillSymbol({
  color: [227, 139, 79, 0.8],
  outline: {
    color: [255, 255, 255],
    width: 1,
  },
});

function App() {
  return (
    <>
      <ArcGISMapView>
        <ArcGISGraphicsLayer>
          <ArcGISGraphic geometry={point} symbol={markerSymbol} />
          <ArcGISGraphic geometry={polyline} symbol={lineSymbol} />
          <ArcGISGraphic geometry={polygon} symbol={fillSymbol} />
        </ArcGISGraphicsLayer>
      </ArcGISMapView>
      {/* <ArcGISSceneView /> */}
      {/* <ArcGISWebMap /> */}
      {/* <ArcGISWebScene /> */}
    </>
  );
}

export default App;
