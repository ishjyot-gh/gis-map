import { GeoJSON } from "react-leaflet";
import { useEffect, useState } from "react";

function GeoJsonLayer({ url }) {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(setData);
    }, [url]);

    return data ? (
        <GeoJSON
            data={data}
            onEachFeature={(feature, layer) => {

                const props =
                    feature.properties;

                layer.bindPopup(`
                    <b>${props.NAME_1}</b><br/>
                `); 

                // layer.bindTooltip(
                //     feature.properties.NAME_1,
                //     {
                //         permanent: true,
                //         direction: "center"
                //     }
                // );

            }}
        />
    ) : null;
}

export default GeoJsonLayer;