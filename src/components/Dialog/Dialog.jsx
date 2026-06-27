import "./Dialog.css";

export default function Dialog({ setIsOpen, isGameOver, onPlayAgain }) {
  return (
    <div className="modalOverlay">
      <div className="modal">
        {isGameOver ? (
          <>
            <h3 className="modalTitle">You Lost!</h3>
            <p className="modalText">Try again and beat your high score.</p>

            <button className="btnDialog" onClick={onPlayAgain}>
              Play Again
            </button>
          </>
        ) : (
          <>
            <h3 className="modalTitle">Game Rules</h3>
            <ul>
              <li>Click a card to earn points</li>
              <li>If you click same card twice, you lose</li>
            </ul>
            <button className="btnDialog" onClick={() => setIsOpen(false)}>
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
}
