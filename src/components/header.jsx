import logo from "../assets/leaf.svg";
import "../styles/header.css";
function Header() {
  return (
    <>
      <div className="header-section">
        <img className="logo-section" src={logo} alt="fall logo" />
        <h1 className="header-title">Here Comes the Fall Season...</h1>
      </div>
    </>
  );
}

export default Header;
