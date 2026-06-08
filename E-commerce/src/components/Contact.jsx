import { Navbar } from "./Navbar";

export function Contact({ setPage }) {
  return (
    <>
      <Navbar setPage={setPage} />

      <div className="page">
        <h1>Contact Us</h1>

        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea rows="5" placeholder="Message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </>
  );
}