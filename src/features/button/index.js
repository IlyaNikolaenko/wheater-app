import React from "react";
import { useDispatch } from "react-redux";
import { addCity } from "../weatherSlice";
import styles from "../../app/styles/button.module.css";

const Button = ({ city, setCity }) => {
  const dispatch = useDispatch(addCity);

  const handleAddCity = () => {
    dispatch(addCity(city));
    setCity(null);
  };
  return (
    <button className={styles.button} onClick={handleAddCity}>
      Add city
    </button>
  );
};

export default Button;
