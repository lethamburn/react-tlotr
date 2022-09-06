import { useEffect, useState } from "react";
import { API } from "../services/API";

const Quote = () => {
  const [loading, setLoading] = useState(true);
  const [quote, setQuote] = useState({});
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const getQuote = async () => {
      const quotes = await API.get("/quote");
      const random =
        quotes.data.docs[
          Math.floor(Math.random() * quotes?.data?.docs?.length)
        ];
      setQuote(random.dialog);

      const characters = await API.get("/character?_id=" + random.character);
      const quoteCharacter = characters.data.docs[0];
      setCharacter(quoteCharacter.name);

      setLoading(false);
    };

    getQuote();
  }, []);

  if (loading) {
    return <div>Loading quote...</div>;
  }

  return (
    <p className="quote">
      <q>{quote}</q> {character}
    </p>
  );
};

export default Quote;
