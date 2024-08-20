import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

export const createMapView = (container) => {
  const map = new Map({
    basemap: "osm",
  });

  return new MapView({
    map: map,
    container: container,
    zoom: 13,
    center: [55, 25],
  });
};
