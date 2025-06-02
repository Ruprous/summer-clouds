import React from "react";
import "./ContactSection.css";

const ContactSection = () => (
  <section className="contact-section" id="contact">
    <h2>CONTACT</h2>
    <p>
      お仕事のご依頼・ご相談・ご質問など、お気軽にご連絡ください。SNSのDMやメールでも受け付けています。
    </p>
    <ul className="contact-list">
      <li>
        <span>X / Twitter：</span>
        <a href="https://x.com/Ruprous" target="_blank" rel="noopener noreferrer">@Ruprous</a>
      </li>
      <li>
        <span>Discord：</span>
        <span>Ruprous</span>
      </li>
      <li>
        <span>Mail：</span>
        <a href="mailto:ruprous.studio@gmail.com">ruprous.studio@gmail.com</a>
      </li>
    </ul>
  </section>
);

export default ContactSection;