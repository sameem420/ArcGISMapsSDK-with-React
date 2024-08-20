import { useEffect, useRef } from "react";
import "./styles.css";
import { createSceneView } from "../../utils/createSceneView";

const ArcGISSceneView = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const sceneView = createSceneView(mapRef.current);
    return () => sceneView && sceneView.destroy();
  }, []);

  return (
    <>
      <div ref={mapRef} className="sceneViewDiv"></div>
    </>
  );
};

export default ArcGISSceneView;
