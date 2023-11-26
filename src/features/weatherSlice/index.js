import { createSlice } from "@reduxjs/toolkit";

export const WeatherSlice = createSlice({
  name: "weather",
  initialState: {
    value: JSON.parse(localStorage.getItem("favorites")) || [],
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  },
  reducers: {
    addCity: (state, action) => {
      if (!state.value.some((item) => item.label === action.payload?.label)) {
        state.value.push({ city: action.payload });
      }
    },
    addFavoriteCity: (state, action) => {
      if (!state.favorites.some((item) => item.id === action.payload[1])) {
        state.favorites.push({
          id: action.payload[1],
          city: { ...action.payload[0], isFavorite: true },
        });
      } else {
        state.favorites.splice(action.payload[1], 1);
      }
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    removeCity: (state, action) => {
      state.value.splice(action.payload, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCity, addFavoriteCity, removeCity } = WeatherSlice.actions;

export default WeatherSlice.reducer;
