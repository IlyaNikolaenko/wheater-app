import React from "react";
import { CURRENT_WEATHER_ICON_URL } from "../../app/api/URL";
import styles from "../../app/styles/weatherForecastCard.module.css";
import moment from "moment";

const WeatherForecastCard = ({ data, name }) => {
  return (
    <>
      {data && (
        <div className={styles.weather}>
          <div className={styles.top}>
            <div>
              <p className={styles.weatherDescription}>
                {moment(data.dt_txt).format("D, MMMM YYYY, H:mm")}
              </p>
              <p className={styles.city}>{data.name || name}</p>
              <p className={styles.weatherDescription}>
                {data.weather[0].description}
              </p>
            </div>
            <p className={styles.temperature}>{Math.round(data.main.temp)}°C</p>
            <img
              alt="weather"
              className={styles.weatherIcon}
              src={`${CURRENT_WEATHER_ICON_URL}${data.weather[0].icon}@2x.png`}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherForecastCard;
