import Map from "@arcgis/core/Map";
import SceneView from "@arcgis/core/views/SceneView";

export const createSceneView = (container) => {
  const map = new Map({
    basemap: "streets-dark-3d",
  });
  return new SceneView({
    map: map,
    container: container,
  });
};
