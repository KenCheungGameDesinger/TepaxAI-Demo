"use client";

/* TODO
auto-completed suggestion in input bar
fix bug: random didn't move
click markerF shows location info / show location description

styling map as own brand

*/

import {
  GoogleMap,
  InfoWindowF,
  InfoWindow,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";
import React, { useCallback, useEffect, useRef, useState } from "react";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import LocationInput from "./form/location-input";
import { Button, Input, Skeleton } from "@nextui-org/react";
import { Dices, HandIcon } from "lucide-react";
import { motion } from "framer-motion";

export const DEFULT_DISTANCE_IN_KM = "100";

const cities = [
  "北京",
  "上海",
  "深圳",
  "广州",
  "成都",
  "南京",
  "武汉",
  "重庆",
  "天津",
  "杭州",
  "西安",
  "昆明",
  "大连",
  "郑州",
  "长沙",
  "济南",
  "哈尔滨",
  "汕头",
  "乌鲁木齐",
  "福州",
  "长春",
  "无锡",
  "石家庄",
  "青岛",
  "苏州",
  "南通",
  "厦门",
  "洛阳",
  "宁波",
  "合肥",
  "中山",
  "贵阳",
  "兰州",
  "淄博",
  "烟台",
  "惠州",
  "南宁",
  "温州",
  "常州",
  "齐齐哈尔",
  "吉林",
  "唐山",
  "包头",
  "绍兴",
  "柳州",
  "泰州",
  "宜昌",
  "泉州",
  "湛江",
  "潍坊",
  "镇江",
  "银川",
  "潮州",
  "常德",
  "揭阳",
  "南昌",
  "西宁",
  "太原",
  "呼和浩特",
  "珠海",
  "遵义",
  "临沂",
  "邯郸",
  "湖州",
  "鞍山",
];

const configureSchema = Yup.object().shape({
  city: Yup.string().required("Required"),
});

const containerStyle = {
  width: "100%",
  height: "500px",
  borderRadius: "20px", // this line gives the border a radius
  borderWidth: "2px",
  overflow: "hidden", // this line makes sure the Google Map respects the border radius
};

async function getLatLonForCity(city: string) {
  try {
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      city
    )}&key=AIzaSyCY2VFM8lDLE10ZeN3X3cs7Nl4ltn3BHWU`;
    const geocodeResponse = await fetch(geocodeUrl);
    const geocodeData = await geocodeResponse.json();
    const { lat, lng } = geocodeData.results[0].geometry.location;
    return { lat: lat, lon: lng };
  } catch (error) {
    return { lat: 31.22, lon: 121.48 };
  }
}

export type Place = {
  // name: string;
  latitude: number;
  longitude: number;
};

const Map = () => {
  const [city, setCity] = useState("");

  const [position, setPosition] = useState({
    lat: 31.22,
    lon: 121.48,
  });

  const [places, setPlaces] = useState<Place[]>([
    {
      // name: city,
      latitude: position.lat,
      longitude: position.lon,
    },
  ]);

  const cityRef = useRef(undefined);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCY2VFM8lDLE10ZeN3X3cs7Nl4ltn3BHWU",
  });

  const [selectedPlace, setSelectedPlace] = useState<Place | undefined>(
    undefined
  );

  const enterLocation = async (event: any) => {
    event.preventDefault();
    // alert(`You entered for: ${city}`);
    const { lat, lon } = await getLatLonForCity(city);
    setPosition({ lat: lat, lon: lon });
    setPlaces([{ latitude: lat, longitude: lon }]);
  };

  const handleInputChange = (event: any) => {
    setCity(event.target.value);
  };

  const handleLocationClick = async (e: any) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();

    // Here, use Google's Geocoder API to get the city name from lat and lng
    // Ensure to add error handling and edge cases handling for non-city locations
    // Note: The Geocoding API is not free, so make sure to handle your quotas

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyCY2VFM8lDLE10ZeN3X3cs7Nl4ltn3BHWU`
    );
    const data = await response.json();
    console.log(data);

    let city = "";
    for (let i = 0; i < data.results[0].address_components.length; i++) {
      if (data.results[0].address_components[i].types.includes("locality")) {
        city = data.results[0].address_components[i].long_name;
        break;
      }
      if (
        data.results[0].address_components[i].types.includes(
          "administrative_area_level_1"
        )
      ) {
        city = data.results[0].address_components[i].long_name;
      }
    }
    // alert("You clicked on " + city);
    setPlaces([{ latitude: lat, longitude: lng }]);
    setPosition({ lat: lat, lon: lng });
    setCity(city);
  };

  const randomCityGenerator = () => {
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    if (randomCity == city) {
      randomCityGenerator();
    } else {
      setCity(randomCity);
      setPosition({ lat: position.lat, lon: position.lon });
      // alert(`You are going to ${randomCity}!`);
    }
  };

  return (
    <div className="flex-1">
      {!isLoaded ? (
        // <h1>loading</h1>
        <Skeleton className="h-screen rounded-lg" />
      ) : (
        <div style={{ justifyContent: "center" }}>
          <GoogleMap
            id="map"
            mapContainerStyle={containerStyle}
            center={{ lat: position.lat, lng: position.lon }}
            zoom={5}
            onClick={handleLocationClick}
            options={{
              disableDefaultUI: true,
            }}
          >
            <div
              className=""
              style={{
                borderRadius: 15,
                backgroundColor: "white",
                position: "absolute",
                margin: 10,
              }}
            >
              <form
                onSubmit={enterLocation}
                style={{
                  backgroundColor: "transparent",
                  zIndex: 1,
                  justifyContent: "center",
                  width: "100%",
                  justifyItems: "center",
                  alignItems: "center",
                  margin: 0,
                }}
              >
                <motion.div
                  className="group flex-col grid w-full max-w-lg items-center"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 120 }}
                >
                  <Input
                    key="location"
                    type="location"
                    label="Destination"
                    value={city}
                    onChange={handleInputChange}
                    // description="*Choose the country and city as you want"
                    className="grid w-full max-w-lg items-center "
                    variant="bordered"
                    endContent={
                      <Button
                        size="sm"
                        isIconOnly
                        variant="flat"
                        onClick={randomCityGenerator}
                      >
                        <Dices className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                      </Button>
                    }
                  />
                </motion.div>
              </form>
            </div>
            <MarkerF
              // onClick={() => {
              //     setSelectedPlace(places[0]);
              // }}
              position={{ lat: places[0].latitude, lng: places[0].longitude }}
            ></MarkerF>

            {/* {selectedPlace && (
            <InfoWindowF
              position={{
                lat: selectedPlace.latitude,
                lng: selectedPlace.longitude,
              }}
              zIndex={1}
              //   options={{
              //     pixelOffset: {
              //       width: 0,
              //       height: -40,
              //     },
              //   }}
              onCloseClick={() => setSelectedPlace(undefined)}
            >
              <div>
                <h3>{selectedPlace.name}</h3>

              </div>
            </InfoWindowF>
          )} */}
          </GoogleMap>
        </div>
      )}
    </div>
  );
};

export default Map;
