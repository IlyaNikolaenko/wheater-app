import React from "react";
import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEOCODING_API_URL } from "../../app/api/URL";
import Button from "../button";
import styles from "../../app/styles/search.module.css";

const Search = () => {
  const [search, setSearch] = useState(null);

  const handleOnChange = (searchData) => {
    setSearch(searchData);
  };
  const loadOptions = async (inputValue) => {
    if (inputValue) {
      try {
        const responce = await fetch(
          GEOCODING_API_URL +
            new URLSearchParams({
              q: inputValue,
              limit: 5,
              appid: process.env.REACT_APP_API_KEY,
            })
        );
        const responceJSON = await responce.json();
        return {
          options: responceJSON.map((city) => {
            return {
              value: {
                lat: city.lat,
                lon: city.lon,
              },
              label: `${city.name}, ${city.country}`,
            };
          }),
        };
      } catch (error) {
        console.log(error);
      }
    } else {
      return {
        options: [],
      };
    }
  };
  return (
    <div className={styles.row}>
      <AsyncPaginate
        className={styles.search}
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
      <Button city={search} className={styles.button} setCity={setSearch} />
    </div>
  );
};

export default Search;
