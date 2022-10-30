import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const charactersURL = "https://rickandmortyapi.com/api/character";

  const getCharacter = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getCharacter(charactersURL);
  }, []);

  return (
    <>
      <div className="container"></div>
      <Cards characters={characters} />
    </>
  );
};

export default Characters;
