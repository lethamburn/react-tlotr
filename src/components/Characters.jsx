import { useState, useEffect } from "react";
import { API } from "../services/API";

const Characters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const getCharacters = async () => {
      const characters = await API.get("/character");
      setCharacters(characters.data.docs);
      setLoading(false);
    };
    getCharacters();
  }, []);

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(keyword)
  );

  if (keyword === "") {
    return (
      <section className="characters" id="characters">
        <h2>Characters</h2>
        <form>
          <input type="text" id="search" placeholder="Search for a character" />
          <button
            type="button"
            onClick={() => setKeyword(search.value.toLowerCase())}
          ></button>
        </form>
        <h2 className="advert">Search for a character</h2>
      </section>
    );
  }
  return (
    <section className="characters" id="characters">
      <h2>Characters</h2>
      <form>
        <input type="text" id="search" placeholder="Search for a character" />
        <button
          type="button"
          onClick={() => setKeyword(search.value.toLowerCase())}
        ></button>
      </form>

      <div>
        {filteredCharacters.map((character) => (
          <a href={character.wikiUrl} target="__blank" key={character._id}>
            <figure>
              <h3>{character.name}</h3>
              <h4>{character.race}</h4>
              {character.birth !== "" && <h4>Birth: {character.birth}</h4>}
              {character.death !== "" && <h4>Death: {character.death}</h4>}
              {character.realm !== "" && <h4>Realm : {character.realm}ƒ</h4>}
            </figure>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Characters;
