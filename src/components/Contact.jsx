import "./contact.css";

function Contact({ t }) {
  return (
    <div className="contact-section">
      <h2 className="hidden">📞 {t("contact")}</h2>
      <div className="contact-boxes">
        <div className="contact-card hidden">
          <h3>{t("groomName")}</h3>
          <p>
            <p>+306943659188</p>
            <i className="fab fa-whatsapp fa-lg"></i>
            <i className="fab fa-viber fa-lg"></i>
          </p>
        </div>
        <div className="contact-card hidden">
          <h3>{t("brideName")}</h3>
          <p>
            <p>+306982316674</p>
            <i className="fab fa-whatsapp fa-lg"></i>
            <i className="fab fa-viber fa-lg"></i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
