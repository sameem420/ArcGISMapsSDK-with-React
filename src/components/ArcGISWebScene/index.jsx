import SceneView from "@arcgis/core/views/SceneView";
import WebScene from "@arcgis/core/WebScene";
import { useRef, useEffect } from "react";
import "./styles.css";

const ArcGISWebScene = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const webScene = new WebScene({
      portalItem: {
        id: "1c071fcf8ff2448599b0547116e2de55",
      },
    });

    const sceneView = new SceneView({
      map: webScene,
      container: mapRef.current,
    });

    return () => {
      sceneView && sceneView.destroy();
    };
  }, []);

  return (
    <>
      <div ref={mapRef} className="webSceneDiv"></div>
    </>
  );
};

export default ArcGISWebScene;
