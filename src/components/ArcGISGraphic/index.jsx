import Graphic from "@arcgis/core/Graphic";
import { useContext, useEffect, useState } from "react";
import { graphicLayerContext } from "../../contexts";

const ArcGISGraphic = ({ geometry, symbol }) => {
  const { _graphicsLayer } = useContext(graphicLayerContext);
  const [_graphic, setGraphic] = useState(null);

  useEffect(() => {
    const graphic = new Graphic({
      geometry,
      symbol,
    });

    setGraphic(graphic);

    return () => {};
  }, []);

  useEffect(() => {
    if (_graphic && _graphicsLayer) {
      _graphicsLayer.add(_graphic);
    }

    return () => {};
  }, [_graphicsLayer, _graphic]);

  return <></>;
};

export default ArcGISGraphic;
