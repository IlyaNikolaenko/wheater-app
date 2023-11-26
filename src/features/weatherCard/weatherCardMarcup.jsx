import React from "react";
import styles from "../../app/styles/weatherCard.module.css";
import { CURRENT_WEATHER_ICON_URL } from "../../app/api/URL";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartFav } from "@fortawesome/free-solid-svg-icons";

const weatherCardMarcup = ({
  data,
  handleNavigate,
  name,
  handleRemoveFavorite,
  handleAddFavorite,
  isFavorite,
}) => {
  return (
    <>
      {data && (
        <div className={styles.weather}>
          {handleAddFavorite && (
            <div className={styles.parameterRow}>
              <FontAwesomeIcon
                icon={faXmarkCircle}
                size="lg"
                onClick={handleRemoveFavorite}
              />
              <FontAwesomeIcon
                icon={isFavorite ? faHeartFav : faHeart}
                size="lg"
                onClick={handleAddFavorite}
              />
            </div>
          )}
          <div className={styles.top} onClick={handleNavigate}>
            <div>
              <p className={styles.city}>{data.name || name}</p>
              <p className={styles.weatherDescription}>
                {data.weather[0].description}
              </p>
            </div>
            <img
              alt="weather"
              className={styles.weatherIcon}
              src={`${CURRENT_WEATHER_ICON_URL}${data.weather[0].icon}@2x.png`}
            />
          </div>
          <div className={styles.bottom}>
            <p className={styles.temperature}>{Math.round(data.main.temp)}°C</p>
            <div className={styles.details}>
              <div className={styles.parameterRow}>
                <span className={styles.parameterLabel}>Details</span>
              </div>
              <div className={styles.parameterRow}>
                <span className={styles.parameterLabel}>Feels like</span>
                <span className={styles.parameterValue}>
                  {Math.round(data.main.feels_like)}°C
                </span>
              </div>
              <div className={styles.parameterRow}>
                <span className={styles.parameterLabel}>Wind</span>
                <span className={styles.parameterValue}>
                  {data.wind.speed}m/s
                </span>
              </div>
              <div className={styles.parameterRow}>
                <span className={styles.parameterLabel}>Humidity</span>
                <span className={styles.parameterValue}>
                  {data.main.humidity}%
                </span>
              </div>
              <div className={styles.parameterRow}>
                <span className={styles.parameterLabel}>Pressure</span>
                <span className={styles.parameterValue}>
                  {data.main.pressure} hPa
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default weatherCardMarcup;
