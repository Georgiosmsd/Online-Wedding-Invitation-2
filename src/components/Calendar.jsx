import "./calendar.css";

function Calendar({ t }) {
  return (
    <div className="calendar hidden">
      <div className="calendar__title hidden">
        <h2>{t("wedding_date_title")}</h2>
        <h1>{t("wedding_date")}</h1>
      </div>
      <br></br>
      <div className="calendar__date hidden">
        <div className="calendar__day">{t("date1")}</div>
        <div className="calendar__day">{t("date2")}</div>
        <div className="calendar__day">{t("date3")}</div>
        <div className="calendar__day">{t("date4")}</div>
        <div className="calendar__day">{t("date5")}</div>
        <div className="calendar__day">{t("date6")}</div>
        <div className="calendar__day">{t("date7")}</div>
        <div className="calendar__number">1</div>
        <div className="calendar__number">2</div>
        <div className="calendar__number">3</div>
        <div className="calendar__number">4</div>
        <div className="calendar__number">5</div>
        <div className="calendar__number">6</div>
        <div className="calendar__number">7</div>
        <div className="calendar__number">8</div>
        <div className="calendar__number">9</div>
        <div className="calendar__number">10</div>
        <div className="calendar__number">11</div>
        <div className="calendar__number">12</div>
        <div className="calendar__number">13</div>
        <div className="calendar__number">14</div>
        <div className="calendar__number">15</div>
        <div className="calendar__number">16</div>
        <div className="calendar__number">17</div>
        <div className="calendar__number calendar__number--current">18</div>
        <div className="calendar__number">19</div>
        <div className="calendar__number">20</div>
        <div className="calendar__number">21</div>
        <div className="calendar__number">22</div>
        <div className="calendar__number">23</div>
        <div className="calendar__number">24</div>
        <div className="calendar__number">25</div>
        <div className="calendar__number">26</div>
        <div className="calendar__number">27</div>
        <div className="calendar__number">28</div>
        <div className="calendar__number">29</div>
        <div className="calendar__number">30</div>
      </div>
    </div>
  );
}

export default Calendar;
