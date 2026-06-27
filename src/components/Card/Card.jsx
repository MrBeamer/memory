import "./Card.css";
import { truncateString } from "../../utils";
export default function Card({ character, handleClick }) {
  return (
    <div onClick={() => handleClick(character.id)} className="card">
      <div className="imgContainer">
        <img className="cardImg" src={character.image} alt={character.name} />
      </div>
      <p className="cardDesc">{truncateString(character.name, 16)}</p>
    </div>
  );
}
