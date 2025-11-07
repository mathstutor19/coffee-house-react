import mobile from "../../images/mobile.png";
import buttonGooglePlay from "../../images/icons/button-google-play.svg";
import buttonAppStore from "../../images/icons/button-app-store.svg";
import "./Mobile.css";
const Mobile = () => {
  return (
    <section className="mobile">
      <div className="mobile__left">
        <h2 className="mobile__title">
          <span>Download</span> our apps to start ordering
        </h2>
        <div className="mobile__text">
          Download the Resource app today and experience the comfort of ordering
          your favorite coffee from wherever you are
        </div>
        <div className="mobile__links__wrapper">
          <div className="mobile__link__wrapper">
            <img
              className="mobile__link__img"
              src={buttonGooglePlay}
              alt="button-app-store"
            />
            <div className="mobile__links__content">
              <span>Available on the</span>
              <p>App Store</p>
            </div>
          </div>
          <div className="mobile__link__wrapper">
            <img
              className="mobile__link__img"
              src={buttonAppStore}
              alt="button-google-play"
            />
            <div className="mobile__links__content">
              <span>Available on the</span>
              <p>Google Play</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile__right">
        <img src={mobile} alt="mobile" />
      </div>
    </section>
  );
};

export default Mobile;
