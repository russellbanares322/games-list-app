import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
const { REACT_APP_GAME_API_KEY } = process.env;

export const GameContext = createContext();

export const GameContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const options = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
      headers: {
        "X-RapidAPI-Key": REACT_APP_GAME_API_KEY,
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <GameContext.Provider value={{ data, isLoading }}>
      {props.children}
    </GameContext.Provider>
  );
};
