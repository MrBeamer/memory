import { useState } from "react";

import "./App.css";
import CardGrid from "./containers/CardGrid/CardGrid";
import SideBar from "./containers/SideBar/SideBar";
import { shuffle } from "./utils";

function App() {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [clickedCharacters, setClickedCharacters] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function resetGame() {
    setScore(0);
    setClickedCharacters([]);
    setCharacters((prev) => shuffle(prev));
    setIsGameOver(false);
  }

  function onPlayAgain() {
    setIsOpen(false);
    resetGame();
  }

  function handleClick(characterId) {
    const hasBeenClicked = clickedCharacters.some((id) => id === characterId);

    if (hasBeenClicked) {
      setCharacters((prev) => shuffle(prev));
      setScore(0);
      setClickedCharacters([]);
      setIsGameOver(true);
      setIsOpen(true);
      return;
    } else {
      setCharacters((prev) => shuffle(prev));
      setClickedCharacters((prev) => [characterId, ...prev]);
    }
    setScore((prevScore) => {
      const newScore = prevScore + 1;
      setHighscore((prevHigh) => (newScore > prevHigh ? newScore : prevHigh));
      return newScore;
    });
  }

  return (
    <div className="centerContainer">
      <SideBar
        score={score}
        highscore={highscore}
        resetGame={resetGame}
        isGameOver={isGameOver}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        onPlayAgain={onPlayAgain}
      />
      <CardGrid
        handleClick={handleClick}
        characters={characters}
        setCharacters={setCharacters}
      />
    </div>
  );
}

export default App;
