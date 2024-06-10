"use client";

import React, { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map from "@/app/_components/organisms/map/map";

const Home = () => {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(
    null
  );

  return (
    <>
      <div className="absolute w-full h-full">
        <Map onLocationChange={setUserLocation} />
      </div>
    </>
  );
};

export default Home;
