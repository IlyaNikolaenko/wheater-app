import React from "react";
import Search from "../../features/search";
import WeatherCard from "../../features/weatherCard";
import { useSelector } from "react-redux";
import styles from "../../app/styles/mainPage.module.css";

function MainPage() {
  const cities = useSelector((state) => state.weather.value);
  return (
    <div className={styles.body}>
      <Search />
      <div className={styles.container}>
        {cities &&
          cities.map((item, i) => (
            <WeatherCard key={i} city={item.city || item} index={i} />
          ))}
      </div>
    </div>
  );
}

export default MainPage;
