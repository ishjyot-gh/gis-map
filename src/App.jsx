import { MapContainer, TileLayer } from "react-leaflet";
import GeoJsonLayer from "./components/GeoJsonLayer";
import "leaflet/dist/leaflet.css";
import {
  LayersControl
} from "react-leaflet";

function App() {

  return (
    <MapContainer
      center={[22.5, 78.9]}
      zoom={5}
      style={{
        height: "100vh",
        width: "100%"
      }}
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LayersControl position="topright">

        <LayersControl.Overlay checked name="India">
          <GeoJsonLayer
            url="/data/india.geojson"
          />
        </LayersControl.Overlay>

        <LayersControl.Overlay checked name="States">
          <GeoJsonLayer
            url="/data/states.geojson"
          />
        </LayersControl.Overlay>

        <LayersControl.Overlay
          name="Districts"
        >
          <GeoJsonLayer
            url="/data/districts.geojson"
          />
        </LayersControl.Overlay>

        <LayersControl.Overlay
          name="Taluks"
        >
          <GeoJsonLayer
            url="/data/taluks.geojson"
          />
        </LayersControl.Overlay>

      </LayersControl>


    </MapContainer>
  );
}

export default App;