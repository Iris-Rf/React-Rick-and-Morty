import React from "react";

const Home = (home) => {
  return (
    <>
      <div className="container-home">
      Welcome to Rick and Morty APP🤗
      <div className="container-img"> 
        <img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/950/public/media/image/2022/10/rick-morty-6x05-2831099.jpg?itok=SAFfAg51"></img>
      </div>
      <div className="button">
        <button key={home} type="button" src="/react-rickandmorty/src/pages/Characters.jsx"></button>
      </div>
      </div>
     
    </>
  );
};

export default Home;
