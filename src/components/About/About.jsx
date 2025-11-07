import aboutFirst from "../../images/about-1.png";
import aboutSecond from "../../images/about-2.png";
import aboutThird from "../../images/about-3.png";
import aboutFourth from "../../images/about-4.png";
import "./About.css";
const About = () => {
  return (
    <section className="about">
      <h2 className="about__title">
        Resource is <span> the perfect and cozy place</span> where you can enjoy
        a variety of hot beverages, relax catch up with friends, or get some
        work done.
      </h2>
      <div className="about__images__wrapper">
        <div className="about__left">
          <img className="about__image" src={aboutFirst} alt="about-1" />
          <img
            className="about__image about__image__hidden"
            src={aboutSecond}
            alt="about-2"
          />
        </div>
        <div className="about__right">
          <img
            className="about__image about__image__hidden"
            src={aboutThird}
            alt="about-3"
          />
          <img className="about__image" src={aboutFourth} alt="about-4" />
        </div>
      </div>
    </section>
  );
};

export default About;
