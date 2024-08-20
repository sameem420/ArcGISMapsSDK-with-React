import { useContext, useEffect, useState } from "react";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import { mapContext } from "../../contexts";
import { graphicLayerContext } from "../../contexts";

const ArcGISGraphicsLayer = ({ children }) => {
  const { view } = useContext(mapContext);

  const [_graphicsLayer, setGraphicsLayer] = useState(null);

  useEffect(() => {
    const graphicsLayer = new GraphicsLayer();

    setGraphicsLayer(graphicsLayer);

    return () => {};
  }, []);

  useEffect(() => {
    if (_graphicsLayer && view) {
      view.map.add(_graphicsLayer);
    }
    return () => {};
  }, [view, _graphicsLayer]);

  return (
    <>
      {_graphicsLayer && (
        <graphicLayerContext.Provider value={{ _graphicsLayer }}>
          {children}
        </graphicLayerContext.Provider>
      )}
    </>
  );
};

export default ArcGISGraphicsLayer;
