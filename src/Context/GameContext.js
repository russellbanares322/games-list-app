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
  const [isDarkMode, setIsDarkMode] = useState(false);
  const currentTheme = JSON.parse(localStorage.getItem("theme"));

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", JSON.stringify(isDarkMode));
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
          console.log(response.data);
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

  return (
    <GameContext.Provider
      value={{
        data,
        isLoading,
        currentTheme,
        setIsDarkMode,
        handleToggleTheme,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
