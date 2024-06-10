"use client";

import React, { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map from "@/app/_components/organisms/map/map";
import RootLayout from "./layout";

const Home = () => {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(
    null
  );

  return (
    <RootLayout>
      <div className="absolute w-full h-full">
        <Map onLocationChange={setUserLocation} />
      </div>
    </RootLayout>
  );
};

export default Home;
