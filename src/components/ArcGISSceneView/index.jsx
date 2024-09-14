import { useEffect, useRef } from "react";
import "./styles.css";
import { createSceneView } from "../../utils/createSceneView";
import Locate from "@arcgis/core/widgets/Locate";
import Track from "@arcgis/core/widgets/Track";
import Search from "@arcgis/core/widgets/Search";

const ArcGISSceneView = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const sceneView = createSceneView(mapRef.current);

    const locate = new Locate({
      view: sceneView,
    });

    const track = new Track({
      view: sceneView,
    });

    const search = new Search({
      view: sceneView,
    });

    sceneView.ui.add(search, {
      position: "top-right",
    });

    sceneView.ui.add(locate, {
      position: "top-right",
    });

    sceneView.ui.add(track, {
      position: "top-right",
    });

    return () => sceneView && sceneView.destroy();
  }, []);

  return (
    <>
      <div ref={mapRef} className="sceneViewDiv"></div>
    </>
  );
};

export default ArcGISSceneView;
