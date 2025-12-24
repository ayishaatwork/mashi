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
          <p className="contact-intro">
            Have a question or enquiry?<br />
            Get in touch and we’ll get back to you soon.
          </p>

          <form className="contact-form">
            <div className="contact-row">
              <input type="text" placeholder="NAME" />
              <input type="text" placeholder="PHONE" />
            </div>

            <input type="email" placeholder="EMAIL" />

            <textarea placeholder="MESSAGE" rows={6} />

            <button type="submit" className="contact-submit">
              SEND
            </button>
          </form>

          <div className="contact-footer">
            <span>EMAIL: create@mashistore.com</span>
            <span>PHONE: +91 70348 85119</span>
            <span>INSTAGRAM</span>
          </div>
        </div>
      </div>
    </main>
  );
}
