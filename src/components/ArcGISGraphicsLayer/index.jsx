import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import { useEffect, useContext, useState } from "react";
import { mapContext } from "../../contexts";
import { graphicsLayerContext } from "../../contexts";

const ArcGISGraphicsLayer = ({ children }) => {
  const { view } = useContext(mapContext);
  const [_graphicsLayer, setGraphicsLayer] = useState(null);

  useEffect(() => {
    const graphicsLayer = new GraphicsLayer();

    setGraphicsLayer(graphicsLayer);

    return () => {};
  }, []);

  useEffect(() => {
    if (_graphicsLayer) {
      view.map.add(_graphicsLayer);
    }
    return () => {};
  }, [view, _graphicsLayer]);

  return (
    <>
      {_graphicsLayer && (
        <graphicsLayerContext.Provider value={{ _graphicsLayer }}>
          {children}
        </graphicsLayerContext.Provider>
      )}
    </>
  );
};

export default ArcGISGraphicsLayer;
