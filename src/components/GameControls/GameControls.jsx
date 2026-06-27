import "./GameControls.css";
export default function GameControls({ setIsOpen, resetGame }) {
  return (
    <div className="btnContainer">
      <button onClick={() => setIsOpen(true)} className="btn btnHowTo ">
        How to play
      </button>
      <button onClick={() => resetGame()} className="btn btnReset">
        <i class="material-icons">refresh</i>
        <p> Shuffle</p>
      </button>
    </div>
  );
}
