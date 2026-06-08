import { Navbar } from "./Navbar";

export function About({ setPage }) {
  return (
    <>
      <Navbar setPage={setPage} />

      <div className="page">
        <h1>About Us</h1>

        <p>
          PitchPro is dedicated to providing high-quality cricket gear for
          beginners, enthusiasts, and professional players.
        </p>

        <p>
          We believe every player deserves reliable equipment that enhances
          performance and confidence on the field.
        </p>
      </div>
    </>
  );
}