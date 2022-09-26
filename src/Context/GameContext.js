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

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    setIsLoading(true);
    const options = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
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
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <GameContext.Provider
      value={{ data, isLoading, isDarkMode, handleToggleTheme }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
