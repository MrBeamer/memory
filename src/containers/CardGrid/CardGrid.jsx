import Card from "../../components/Card/Card";
import { useState, useEffect } from "react";
import "./CardGrid.css";

export default function CardGrid({ handleClick, characters, setCharacters }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(
      "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12",
    )
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((json) => setCharacters(json))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []); // empty array = run once on mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="cardGrid">
      {characters.map((character) => (
        <Card
          key={character.id}
          character={character}
          handleClick={handleClick}
        ></Card>
      ))}
    </div>
  );
}
