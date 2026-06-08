import {Link} from "react-router-dom";
export function Navbar({ setPage, activePage }) {
  return (
    <nav className="navbar">
      <div className="logo" onClick={() => setPage("home")}>
        🏏 <span>PITCH</span>PRO
      </div>

<ul className="nav-links">

  <li>
    <Link to="/">Home</Link>
  </li>

  <li>
    <Link to="/products">Products</Link>
  </li>

  <li>
    <Link to="/about">About</Link>
  </li>

  <li>
    <Link to="/contact">Contact</Link>
  </li>

</ul>

      <button className="cart-btn">
        🛒 Cart
      </button>
    </nav>
  );
}