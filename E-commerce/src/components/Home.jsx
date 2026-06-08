import {Link} from "react-router-dom";
export function Home({ setPage }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="logo" onClick={() => setPage("home")}>
        🏏 <span>PITCH</span>PRO
      </div>
<br />
        <div className="hero-tag">
          INDIA'S #1 CRICKET STORE
        </div>

        <h1 className="hero-title">
          PLAY LIKE
          <br />
          <span>A CHAMPION</span>
        </h1>

        <h1 className="hero-title1">
          <span>WELCOME TO OUR CRICKSTORE!!!!</span>
          <br />
        </h1>

        <p className="hero-text">
          Premium cricket equipment trusted by professionals.
          From Kashmir willow bats to tournament-grade balls —
          gear up for your next victory.
        </p>

        <div className="hero-buttons">

  <Link to="/products">
    <button className="shop-btn">
      SHOP NOW
    </button>
  </Link>

  <Link to="/about">
    <button className="story-btn">
      OUR STORY
    </button>
  </Link>

</div>

      </div>
    </section>
  );
}