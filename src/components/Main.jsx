import "./Main.css";
import Calendar from "./Calendar";
import Contact from "./Contact";
import HeroCarousel from "./HeroCarousel";
import ChurchImg from "../assets/church.jpg";
import KentroImg from "../assets/Kentro1.png";

function Main({ onReserveClick, t }) {
  return (
    <section id="main" className="main-page">
      <div className="invitation-content">
        <div className="sticky-hero">
          <HeroCarousel />
          <div className="arrow bounce">
            <a className="fa fa-arrow-down fa-2x" href="#"></a>
          </div>
          <div className="sticky-hero-content">
            <div className="container-title">
              <h1>{t("title_names")}</h1>
              <p className="subtitle hidden2" translate="no">
                Save the Date
              </p>
              <br></br>
              <p className="subtitle-date hidden2">18.09.2027</p>
            </div>
          </div>
        </div>

        <div className="thanks hidden">
          <h2>{t("congratulations")}</h2>
        </div>
        <div className="thanks hidden">
          <h3>{t("thanks1")}</h3>
        </div>
        <div className="thanks hidden">
          <h3>{t("thanks2")}</h3>
        </div>

        <Calendar t={t} />
      </div>

      <div className="info-wrapper">
        <div className="info-container hidden">
          <div className="info-container hidden">
            <div className="timeline-container">
              <h2 className="timeline-title">{t("timeline_title")}</h2>
              <ul className="timeline">
                <li className="timeline-item hidden">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-icon">&#128141;</div>
                    <div className="timeline-time">16:30</div>
                    <div className="timeline-event">{t("ceremony")}</div>
                    <div className="timeline-location">
                      {t("ceremony_location")}
                    </div>
                  </div>
                </li>
                <li className="timeline-item hidden">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-icon">&#129346;</div>
                    <div className="timeline-time">19:00</div>
                    <div className="timeline-event">{t("party")}</div>
                    <div className="timeline-location">
                      {t("party_location")}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* 📍 Location Map */}
          <div className="map-point hidden">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="map-icon">
              <i className="fas fa-map-marker-alt"></i>
            </a>
          </div>

          <div className="map-container hidden">
            <h2>{t("where_are_we_going")}</h2>
          </div>

          <div className="map-container hidden">
            <h3>{t("church")}</h3>
            <img
              src={ChurchImg}
              alt=""
              style={{ marginBottom: "30px", borderRadius: "20px" }}
            />
            <a
              className="custom-button hidden"
              href="https://maps.app.goo.gl/iKC741KrbcDH1MCWA"
              target="_blank">
              {t("directions")}
            </a>
          </div>

          <div className="map-container hidden">
            <h3>{t("venue")}</h3>
            <img
              src={KentroImg}
              alt=""
              style={{ marginBottom: "30px", borderRadius: "20px" }}
            />
            <a
              className="custom-button hidden"
              href="https://maps.app.goo.gl/yAPMnS64ZJZVAzqn8"
              target="_blank">
              {t("directions")}
            </a>
          </div>
        </div>

        {/* ✅ RSVP Section */}
        <div className="container-wedding hidden" id="wedding-info">
          <div className="text-container">
            <h2 className="text-center">{t("will_you_come")}</h2>
            <div className="text-wrapper">
              <div>
                <h3 style={{ lineHeight: "1.7" }}>{t("register_guests")}</h3>
                <button className="rsrv-button hidden" onClick={onReserveClick}>
                  {t("reservation")}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 📞 Contact Info */}
        <Contact t={t} />
      </div>
    </section>
  );
}

export default Main;
