import "./Logo.css";
import logo from "../../assets/logo.png";

export default function Logo() {
  return (
    <div className="logoContainer">
      <img className="logo" src={logo} alt="Logo" />
    </div>
  );
}
