import React, { useState, useEffect } from "react";
import "./Apis.css";

const URL_FACT = "https://api.chucknorris.io/jokes/random";

function Apis() {
  const [fact, setFact] = useState("");
  const [gif, setGif] = useState("");
  const [keyWord, setKeyWord] = useState("");

  function handleInput(e) {
    if (e.key === "Enter") {
      const palabraClave = document.getElementById("inputGif").value;
      document.getElementById("inputGif").value = "";
      setKeyWord(palabraClave);
    }
  }

  useEffect(() => {
    fetch(URL_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { value } = data;
        setFact(value);

        fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=OpFVuzX91CTnSu0JHmikYKR1tiggfSYo&q=${keyWord}&limit=25&offset=0&rating=r&lang=en&bundle=messaging_non_clips`
        )
          .then((res) => res.json())
          .then((response) => {
            let { data } = response;
            const gifs = data.map((image) => image.images.fixed_width.url);
            console.log(gifs);
            setGif(gifs);
          });
      });
  }, [keyWord]);

  return (
    <main className="main-container">
      <h1>Fetching</h1>
      <p>{fact}</p>
      {gif && <img className="imagen" src={gif} alt="gif random" />}
      <input
        id="inputGif"
        type="text"
        placeholder="Ingresa palabra clave..."
        onKeyDown={handleInput}
      />
      <button className="boton" onClick={() => setKeyWord(document.getElementById("inputGif").value)}>
        Buscar
      </button>
    </main>
  );
}

export default Apis;
