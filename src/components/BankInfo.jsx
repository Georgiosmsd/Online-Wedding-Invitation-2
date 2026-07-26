import { useState } from "react";
import "./bankInfo.css";
import { copyToClipboard } from "../utils";

function BankInfo({ t }) {
  const [bankOpen, setBankOpen] = useState(false);

  return (
    <div className="bank-section hidden">
      <h2 style={{ marginBottom: "40px", lineHeight: "2.3" }}>
        {t("gift_info")}
      </h2>
      <div
        className={`bank-toggle-card ${bankOpen ? "bank-expanded" : ""}`}
        onClick={() => !bankOpen && setBankOpen(true)}>
        {!bankOpen ? (
          <div className="bank-closed">
            <i className="fas fa-university fa-2x"></i>
            <span>{t("bankinfo")}</span>
          </div>
        ) : (
          <div className="bank-opened">
            <i className="fas fa-university fa-3x"></i>
            <h3>MISAILIDOU NINA</h3>
            <p>
              GR34 0172 2130 0052 1310 0300 968
              <br />
              POFICHBEXXX
            </p>
            <p>
              Address:
              <br />
              Zurich, 8047
            </p>
            <button
              className="custom-button3"
              style={{ marginBottom: "10px" }}
              onClick={(e) => {
                e.stopPropagation();
                copyToClipboard("GR34 0172 2130 0052 1310 0300 968");
              }}>
              Copy IBAN
            </button>
            <button
              className="custom-button3"
              style={{ marginBottom: "10px" }}
              onClick={(e) => {
                e.stopPropagation();
                copyToClipboard("POFICHBEXXX");
              }}>
              Copy SWIFT/BIC
            </button>
            <button
              className="custom-button3"
              onClick={(e) => {
                e.stopPropagation();
                copyToClipboard("Zurich, 8047");
              }}>
              Copy Address
            </button>
            <br />
            <button
              className="custom-button3"
              style={{
                marginTop: "10px",
                backgroundColor: "#a0647c",
              }}
              onClick={(e) => {
                e.stopPropagation();
                setBankOpen(false);
              }}>
              ✕
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BankInfo;
