import "./Header.css";

const Header = () => {
  return (
    <nav className="nav">
      <img src="/img/brand_logo.png" alt="Brand logo" className="logo-img" />
      <div className="nav-bt-cont">
        <span className="nav-bt">Menu</span>
        <span className="nav-bt">Location</span>
        <span className="nav-bt">About</span>
        <span className="nav-bt">Contact</span>
      </div>
      <button className="login-bt">Login</button>
    </nav>
  );
};
export default Header;
