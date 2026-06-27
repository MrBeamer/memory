import Scores from "../../components/Scores/Scores";
import GameControls from "../../components/GameControls/GameControls";
import "./SideBar.css";
import Dialog from "../../components/Dialog/Dialog";
import Logo from "../../components/Logo/Logo";
import { useState } from "react";

export default function SideBar({
  score,
  highscore,
  resetGame,
  isGameOver,
  isOpen,
  setIsOpen,
  onPlayAgain,
}) {
  return (
    <div className="sideBar">
      <Logo />
      <Scores score={score} highscore={highscore} />
      <GameControls setIsOpen={setIsOpen} resetGame={resetGame} />
      {isOpen && (
        <Dialog
          setIsOpen={setIsOpen}
          isGameOver={isGameOver}
          onPlayAgain={onPlayAgain}
        />
      )}
    </div>
  );
}
