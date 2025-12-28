import "./contact.css";

export default function ContactPage() {
  return (
    <main className="contact-page">
      <div className="contact-layout">
        {/* LEFT TITLE */}
        <div className="contact-left">
          <h1 className="contact-title">Contact Us</h1>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-right">
          <p className="contact-intro contact-intro-bold">Have a question or enquiry?</p>
          <p className="contact-intro contact-intro-bottom">Get in touch and we’ll get back to you soon.</p>

          <form className="contact-form">
            <div className="contact-row">
              <input type="text" placeholder="NAME" />
              <input type="text" placeholder="PHONE" />
            </div>

            <input type="email" placeholder="EMAIL" />

            <textarea placeholder="MESSAGE" rows={10} />

            <button type="submit" className="contact-submit">
              SEND
            </button>
          </form>

          <div className="contact-footer">
            <p><span className="contact-bold">EMAIL:</span> create@mashistore.com</p>
            <p><span className="contact-bold">PHONE:</span> +91 70348 85119</p>
            <p className="contact-bold">INSTAGRAM</p>
          </div>
        </div>
      </div>
    </main>
  );
}
