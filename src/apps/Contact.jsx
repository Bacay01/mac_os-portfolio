import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs.sendForm(
      "service_ir2nh6p",
      "template_b5q3mt8",
      form.current,
      "4DQ5zOPD9T9DB1Rxq"
    )
    .then(() => {
      setStatus("success");
      form.current.reset();
    })
    .catch(() => {
      setStatus("error");
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <div className="contact">
      <h2>Get in Touch</h2>
      <p className="contact-sub">
        Have a project in mind? Send me a message and I'll get back to you.
      </p>

      {status === "success" && (
        <div className="contact-banner success">
          Message sent successfully! I'll get back to you soon.
        </div>
      )}

      {status === "error" && (
        <div className="contact-banner error">
          Something went wrong. Please try again.
        </div>
      )}

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="contact-field">
          <label>Name</label>
          <input
            type="text"
            name="from_name"
            placeholder="Your name"
            required
          />
        </div>

        <div className="contact-field">
          <label>Email</label>
          <input
            type="email"
            name="from_email"
            placeholder="your@email.com"
            required
          />
        </div>

        <div className="contact-field">
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Tell me about your project..."
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      <div className="contact-links">
        <a href="https://github.com/Bacay01" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="mailto:bmia07969@gmail.com">
          Email
        </a>
      </div>
    </div>
  )
}

export default Contact