import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

interface Props {
  zoom?: number;
  onLocationChange?: (location: [number, number]) => void;
  destination?: [number, number] | null;
  route?: any;
}

const Map: React.FC<Props> = ({ zoom = 12, onLocationChange }) => {
  const mapRef = useRef<mapboxgl.Map | null>(null);

  const initializeMap = () => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY!;
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v12",
      center: [139.6917, 35.6895],
      zoom: zoom,
    });

    const geolocateControl = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
      showUserHeading: true,
    });

    map.addControl(geolocateControl);

    map.on("load", () => {
      mapRef.current = map;
      geolocateControl.trigger();
    });

    return map;
  };

  useEffect(() => {
    const map = initializeMap();
    return () => map.remove();
  }, [zoom, onLocationChange]);
  return <div id="map" className="w-full h-full" />;
};

export default Map;
