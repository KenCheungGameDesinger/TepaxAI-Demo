import LocationInput from "@/components/form/location-input";
import MapView from "@/components/map-view";
import React from "react";

function callbackf() {
  console.log("Hi");
}

export default function DestinationForm() {
  return (
    <>
      <MapView />
    </>
  );
}
