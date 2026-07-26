import { useState, useEffect } from "react";
import "./resv.css";

function Reserve({ onBackClick, t }) {
  const [submitted, setSubmitted] = useState(false);
  const [guests, setGuests] = useState([{ name: "", surname: "" }]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleGuestChange = (index, field, value) => {
    const newGuests = [...guests];
    newGuests[index][field] = value;
    setGuests(newGuests);
  };

  const addGuest = () => {
    setGuests([...guests, { name: "", surname: "" }]);
  };

  const resetForm = (formElement) => {
    formElement.reset();
    setGuests([{ name: "", surname: "" }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch("guest.php", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        resetForm(e.target);
      } else {
        alert(t("submission_error"));
      }
    } catch (error) {
      console.error("Error:", error);
      alert(t("submission_error"));
    }
  };

  return (
    <section className="main-page text-center">
      <div className="reservation-card">
        <h2 className="reservation-title">{t("reservation")}</h2>
        <p className="reservation-subtitle1">{t("fill_form")}</p>
        <p className="reservation-subtitle2">{t("happy_to_see_you")}</p>

        <form
          className="reservation-form"
          onSubmit={handleSubmit}
          autoComplete="on">
          <div className="form-group">
            <label htmlFor="name">{t("first_name")} *</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={t("first_name")}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="surname">{t("last_name")} *</label>
            <input
              type="text"
              id="surname"
              name="surname"
              placeholder={t("last_name")}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">{t("contact_phone")} *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="^\+?[0-9]{8,13}$"
              placeholder={t("contact_phone")}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">{t("contact_email")} *</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t("contact_email")}
              required
            />
          </div>

          <div className="dropdown-container">
            <label htmlFor="coming">{t("will_you_attend")} *</label>
            <select name="coming" id="coming" required>
              <option value="" disabled selected>
                {t("choice")}
              </option>
              <option value="yes">{t("of_course")}</option>
              <option value="no">{t("cannot")}</option>
            </select>
          </div>

          <div className="dropdown-container">
            <label htmlFor="adults">{t("adults")}: *</label>
            <select name="adults" id="adults" required>
              <option value="" disabled selected>
                {t("choice")}
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div className="dropdown-container">
            <label htmlFor="children">{t("children")}: *</label>
            <select name="children" id="children" required>
              <option value="" disabled selected>
                {t("choice")}
              </option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">{t("comment_label")}</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              style={{
                width: "100%",
                height: "100px",
                resize: "none",
              }}></textarea>
          </div>

          <div className="form-group">
            <label>{t("guest_names")}</label>
            {guests.map((guest, index) => (
              <div key={index} className="form-group">
                <input
                  type="text"
                  name={`guest_${index + 1}_name`}
                  placeholder={t("name")}
                  value={guest.name}
                  onChange={(e) =>
                    handleGuestChange(index, "name", e.target.value)
                  }
                />
                <input
                  type="text"
                  name={`guest_${index + 1}_surname`}
                  placeholder={t("surname")}
                  value={guest.surname}
                  onChange={(e) =>
                    handleGuestChange(index, "surname", e.target.value)
                  }
                />
              </div>
            ))}

            <button
              type="button"
              onClick={addGuest}
              className="custom-button4 secondary"
              style={{ marginBottom: "15px" }}
              disabled={guests.length >= 10}>
              {t("add_guest")}
            </button>
          </div>

          {submitted && (
            <div
              style={{
                backgroundColor: "#d4edda",
                color: "#155724",
                padding: "15px",
                borderRadius: "10px",
                marginBottom: "20px",
                border: "1px solid #c3e6cb",
              }}>
              {t("reservation_success")}
            </div>
          )}

          <div className="form-buttons">
            <button type="submit" className="custom-button4">
              {t("confirm")}
            </button>
            <button
              type="button"
              className="custom-button4 secondary"
              onClick={onBackClick}>
              {t("back")}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Reserve;
