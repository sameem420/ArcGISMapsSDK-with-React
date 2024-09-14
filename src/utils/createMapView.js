import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

export const createMapView = (container) => {
  const map = new Map({
    basemap: "osm",
  });

  return new MapView({
    map: map,
    container: container,
    zoom: 3,
    center: [-64.78, 32.3]
  });
};
