import twitter from "../../images/icons/twitter.svg";
import instagram from "../../images/icons/instagram.svg";
import facebook from "../../images/icons/facebook.svg";
import pinAlt from "../../images/icons/pin-alt.svg";
import phone from "../../images/icons/phone.svg";
import clock from "../../images/icons/clock.svg";
import "./Footer.css";
const Footer = () => {
  return (
    <footer id="footer" className="container">
      <div className="footer">
        <div className="footer__left">
          <h2 className="footer__left__title">
            Sip, Savor, Smile. <span>It’s coffee time!</span>
          </h2>
          <ul className="footer__socials">
            <li className="footer__social">
              <a href="">
                <img
                  className="footer__social__img"
                  src={twitter}
                  alt="twitter"
                />
              </a>
            </li>
            <li className="footer__social">
              <a href="">
                <img
                  className="footer__social__img"
                  src={instagram}
                  alt="instagram"
                />
              </a>
            </li>
            <li className="footer__social">
              <a href="">
                <img
                  className="footer__social__img"
                  src={facebook}
                  alt="facebook"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__right">
          <h3 className="footer__right__title">Contact us</h3>
          <address className="footer__address">
            <a
              className="footer__address__link"
              target="_blank"
              href="https://maps.app.goo.gl/fyYDikBEUEYPMyWs5"
              rel="noreferrer"
            >
              <img src={pinAlt} alt="pin-alt" />
              <span>8558 Green Rd., LA</span>
            </a>
            <a className="footer__address__link" href="tel:+1(603)555-0123">
              <img src={phone} alt="phone" />
              <span>+1 (603) 555-0123</span>
            </a>
            <a className="footer__address__link" href="">
              <img src={clock} alt="clock" />
              <span>Mon-Sat: 9:00 AM – 23:00 PM</span>
            </a>
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
