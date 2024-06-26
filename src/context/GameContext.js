import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
const {
  REACT_APP_GAME_API_KEY,
  REACT_APP_GAME_HOST_API_KEY,
  REACT_APP_GAME_API_LINK,
} = process.env;

export const GameContext = createContext();

export const GameContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const isDarkMode = JSON.parse(localStorage.getItem("isDarkMode"));
  const isThemeUnset = isDarkMode === null || isDarkMode === undefined;
  const [darkModeTheme, setDarkModeTheme] = useState(
    isThemeUnset ? false : isDarkMode
  );

  const handleToggleTheme = () => {
    setDarkModeTheme(!darkModeTheme);
    localStorage.setItem("isDarkMode", JSON.stringify(!darkModeTheme));
  };

  const handleFetchGameData = () => {
    setIsLoading(true);
    const check = localStorage.getItem("gameData");

    if (check) {
      setData(JSON.parse(check));
      setIsLoading(false);
    } else {
      const options = {
        method: "GET",
        url: REACT_APP_GAME_API_LINK,
        headers: {
          "X-RapidAPI-Key": REACT_APP_GAME_API_KEY,
          "X-RapidAPI-Host": REACT_APP_GAME_HOST_API_KEY,
        },
      };
      axios
        .request(options)
        .then((response) => {
          setData(response.data);
          localStorage.setItem("gameData", JSON.stringify(response.data));
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  useEffect(() => {
    handleFetchGameData();
  }, []);

  // Set page theme if it is not defined
  useEffect(() => {
    if (isThemeUnset) {
      localStorage.setItem("isDarkMode", JSON.stringify(darkModeTheme));
    }
  }, [darkModeTheme, isThemeUnset]);

  return (
    <GameContext.Provider
      value={{
        data,
        isLoading,
        isDarkMode,
        handleToggleTheme,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
