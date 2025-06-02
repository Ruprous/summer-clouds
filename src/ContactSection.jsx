import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ContactSection.css";

const ContactSection = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, offset: 120 });
  }, []);

  return (
    <section className="contact-section" id="contact">
      <div className="contact-box">
        <h2 data-aos="fade-up" data-aos-delay="0">CONTACT</h2>
        <p data-aos="fade-left" data-aos-delay="100">
          お仕事のご依頼・ご相談・ご質問など、お気軽にご連絡ください。SNSのDMやメールでも受け付けています。
        </p>
        <ul className="contact-list">
          <li data-aos="fade-left" data-aos-delay="200">
            <span>X / Twitter：</span>
            <a href="https://x.com/Ruprous" target="_blank" rel="noopener noreferrer">@Ruprous</a>
          </li>
          <li data-aos="fade-left" data-aos-delay="300">
            <span>Discord：</span>
            <span>Ruprous</span>
          </li>
          <li data-aos="fade-left" data-aos-delay="400">
            <span>Mail：</span>
            <a href="mailto:ruprous.studio@gmail.com">ruprous.studio@gmail.com</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactSection;