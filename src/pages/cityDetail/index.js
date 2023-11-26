import React from "react";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { DAILY_FORECAST_URL } from "../../app/api/URL";
import { useSelector } from "react-redux";
import WeatherCardMarcup from "../../features/weatherCard/weatherCardMarcup";
import WeatherForecastCard from "../../features/weatherForecastCard";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../app/styles/cityDetail.module.css";

const CityDetail = () => {
  const location = useLocation();
  const index = location.pathname.split("/")[2];
  const city = useSelector((state) => state.weather.value[index].city);
  const [data, setData] = useState(null);
  useEffect(() => {
    FetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function FetchData() {
    const responce = await fetch(
      DAILY_FORECAST_URL +
        new URLSearchParams({
          lat: city.value.lat,
          lon: city.value.lon,
          cnt: 7,
          appid: process.env.REACT_APP_API_KEY,
          units: "metric",
        })
    );
    const responceJSON = await responce.json();
    setData(responceJSON);
  }
  return (
    <div className={styles.body}>
      <Link to={"/"}>
        <FontAwesomeIcon icon={faArrowLeft} size="xl" className={styles.link} />
      </Link>
      {data && (
        <div className={styles.container}>
          <div className={styles.card}>
            <WeatherCardMarcup
              data={data.list[0]}
              name={data.city.name}
              key={0}
            />
          </div>
          <div className={styles.forecast}>
            {data.list.map((item, index) => {
              if (index === 0) {
                return null;
              }
              return (
                <WeatherForecastCard
                  data={item}
                  name={data.city.name}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default CityDetail;
