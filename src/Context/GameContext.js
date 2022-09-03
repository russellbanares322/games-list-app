import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

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
        "X-RapidAPI-Key": "87f430c423msh0c67d97d417387dp13c6e9jsnab057d57b8d4",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setData(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <GameContext.Provider value={{ data, isLoading }}>
      {props.children}
    </GameContext.Provider>
  );
};
