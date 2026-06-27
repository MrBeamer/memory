import "./Scores.css";
export default function Scores({ score, highscore }) {
  return (
    <div className="scoresContainer">
      <div className="score">
        <span className="label">Score</span>
        <span className="number">{score}</span>
      </div>
      <div className="highscore">
        <span className="label">Highscore</span>
        <span className="number">{highscore}</span>
      </div>
    </div>
  );
}
