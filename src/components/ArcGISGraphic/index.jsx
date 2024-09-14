import Graphic from "@arcgis/core/Graphic";
import { useEffect, useContext, useState } from "react";
import { graphicsLayerContext } from "../../contexts";

const ArcGISGraphic = ({ geometry, symbol }) => {
  const { _graphicsLayer } = useContext(graphicsLayerContext);
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
    _graphicsLayer.add(_graphic);

    return () => {};
  }, [_graphic, _graphicsLayer]);

  return <></>;
};

export default ArcGISGraphic;
