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

  useEffect(() => {
    setIsLoading(true);
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
