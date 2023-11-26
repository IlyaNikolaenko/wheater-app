import React, { useEffect, useState } from "react";
import { CURRENT_WEATHER_URL } from "../../app/api/URL";
import { useNavigate } from "react-router-dom";
import WeatherCardMarcup from "./weatherCardMarcup";
import { useDispatch } from "react-redux";
import { addFavoriteCity, removeCity } from "../weatherSlice";

const WeatherCard = ({ city, index }) => {
  const [data, setData] = useState(null);
  const [isFavorite, setIsFavorite] = useState(city.isFavorite);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    FetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleNavigate = () => {
    navigate(`city/${index}`);
  };
  const handleAddFavorite = () => {
    dispatch(addFavoriteCity([city, index]));
    setIsFavorite(!isFavorite);
  };
  const handleRemoveCity = () => {
    dispatch(removeCity(index));
  };

  async function FetchData() {
    const responce = await fetch(
      CURRENT_WEATHER_URL +
        new URLSearchParams({
          lat: city.value.lat,
          lon: city.value.lon,
          appid: process.env.REACT_APP_API_KEY,
          units: "metric",
        })
    );
    const responceJSON = await responce.json();
    setData(responceJSON);
  }
  return (
    <WeatherCardMarcup
      data={data}
      isFavorite={isFavorite}
      handleNavigate={handleNavigate}
      handleAddFavorite={handleAddFavorite}
      handleRemoveFavorite={handleRemoveCity}
    />
  );
};

export default WeatherCard;
